import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ChannelListItem = ({
  channel,
  setActiveChannelId,
  changeChannel,
  isOneOnOneConversation,
  isUnread,
  activeChannelId,
  currentUserId,
}) => {
  let channelPrefix = null;
  let channelTitle = null;

  let otherUserId;

  let countUnreadMentions = channel.countUnreadMentions();

  if (isOneOnOneConversation) {
    const memberIds = Object.keys(channel.state.members);
    otherUserId = memberIds[0] === currentUserId ? memberIds[1] : memberIds[0];
    channelPrefix = channel.state.members[otherUserId].user.online ? (
      <PresenceIndicator online={true} />
    ) : (
      <PresenceIndicator online={false} />
    );
    channelTitle = (
      <Text style={isUnread ? styles.unreadChannelTitle : styles.channelTitle}>
        {channel.state.members[otherUserId].user.name}
      </Text>
    );
  } else {
    channelPrefix = <Text style={styles.channelTitlePrefix}>#</Text>;
    channelTitle = (
      <Text style={isUnread ? styles.unreadChannelTitle : styles.channelTitle}>
        {channel.data.name && channel.data.name.toLowerCase().replace(' ', '_')}
      </Text>
    );
  }

  return (
    <TouchableOpacity
      key={channel.id}
      onPress={() => {
        setActiveChannelId(channel.id);
        changeChannel(channel.id);
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.channelRow,
        backgroundColor: activeChannelId === channel.id ? '#0676db' : undefined,
      }}>
      <View style={styles.channelTitleContainer}>
        {channelPrefix}
        {channelTitle}
      </View>
      {countUnreadMentions > 0 && (
        <View style={styles.unreadMentionsContainer}>
          <Text style={styles.unreadMentionsText}>{countUnreadMentions}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
const PresenceIndicator = ({online}) => {
  return <View style={online ? styles.onlineCircle : styles.offlineCircle} />;
};
const textStyles = {
  //   fontFamily: 'Lato-Regular',
  color: 'white',
  fontSize: 18,
};
const styles = StyleSheet.create({
  onlineCircle: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: 'green',
  },
  offlineCircle: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    borderColor: 'white',
    borderWidth: 0.3,
    backgroundColor: 'transparent',
  },
  channelRow: {
    padding: 3,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    marginRight: 5,
  },
  channelTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unreadChannelTitle: {
    marginLeft: 3,
    fontWeight: 'bold',
    padding: 5,
    ...textStyles,
  },
  channelTitle: {
    padding: 5,
    fontWeight: '300',
    paddingLeft: 10,
    ...textStyles,
  },
  channelTitlePrefix: {
    fontWeight: '300',
    ...textStyles,
  },
  unreadMentionsContainer: {
    backgroundColor: 'red',
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 20,
  },
  unreadMentionsText: {
    color: 'white',
    padding: 3,
    paddingRight: 6,
    paddingLeft: 6,
    fontSize: 15,
    fontWeight: '900',
    // fontFamily: 'Lato-Regular',
  },
});
