import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PresenceIndicator,
  StyleSheet,
} from 'react-native';

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
};

const styles = StyleSheet.create({});
