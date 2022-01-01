import React from 'react';
import {
  SafeAreaView,
  SectionList,
  TextInput,
  View,
  StyleSheet,
  Item,
  Text,
} from 'react-native';
import useWatchedChannels from '../hooks/useWatchedChannels';

function ChannelList({client, changeChannel}) {
  const {
    activeChannelId,
    setActiveChannelId,
    unreadChannels,
    readChannels,
    oneOnOneConversations,
  } = useWatchedChannels(client, changeChannel);

  //   const renderChannelRow = (channel, isUnread) => {
  //     const isOneOnOneConversation =
  //       Object.keys(channel.state.members).length === 2;

  //       return (
  //           <ChannelListItem  />
  //       )
  //   };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            style={styles.inputSearchBox}
            placeholderTextColor="grey"
            placeholder="Jump To"
          />
        </View>

        <SectionList
          sections={[
            {
              title: 'Unread',
              data: unreadChannels || [],
            },
            {
              title: 'Channels',
              data: readChannels || [],
            },
            {
              title: 'Direct Messages',
              data: oneOnOneConversations || [],
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, section}) => {
            console.log(item);
            return <Text>Kuch Bhu</Text>;
            // return renderChannelRow(item, section.id === 'unread');
          }}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.groupTitleContainer}>
              <Text style={styles.groupTitle}>{title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
  headerContainer: {
    padding: 10,
    marginRight: 10,
  },
  inputSearchBox: {
    backgroundColor: '#2e0a2f',
    padding: 10,
  },
  sectionList: {
    flexGrow: 1,
    flexShrink: 1,
  },
  groupTitleContainer: {
    padding: 10,
    borderBottomColor: '#995d9a',
    borderBottomWidth: 0.3,
    marginBottom: 7,
    backgroundColor: '#3F0E40',
  },
  groupTitle: {
    color: 'white',
    fontWeight: '100',
    fontSize: 12,
    // fontFamily: 'Lato-Regular',
  },
});

export default ChannelList;
