import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Platform} from 'react-native';
import {ChannelHeader} from '../components/ChannelHeader';
import chatClient from '../config/ChatClient';
import {
  Chat,
  MessageList,
  MessageInput,
  Channel,
  KeyboardCompatibleView,
} from 'stream-chat-react-native';
import streamChatTheme from '../Stream-Chat-Theme';
import {MessageSlack} from '../components/MessageSlack';
import {DateSeparator} from '../components/DateSeparator';
import {InputBox} from '../components/InputBox';

const CustomKeyboardCompatibleView = ({children}) => (
  <KeyboardCompatibleView
    keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : -200}
    behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
    {children}
  </KeyboardCompatibleView>
);

function ChannelScreen({navigation, route}) {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const channelId = route.params ? route.params.channelId : null;
    if (!channelId) {
      navigation.openDrawer();
    } else {
      const _channel = chatClient.channel('messaging', channelId);
      setChannel(_channel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  console.log(channel);
  return (
    <SafeAreaView style={styles.channelScreenSaveAreaView}>
      <View style={styles.channelScreenContainer}>
        <ChannelHeader
          navigation={navigation}
          channel={channel}
          client={chatClient}
        />
        <View style={styles.chatContainer}>
          <Chat client={chatClient} style={streamChatTheme}>
            <Channel
              channel={channel}
              KeyboardCompatibleView={CustomKeyboardCompatibleView}>
              {/* <MessageList
                Message={MessageSlack}
                DateSeparator={DateSeparator}
              /> */}
              {/* <MessageInput
                Input={InputBox}
                additionalTextInputProps={{
                  placeholderTextColor: '#979A9A',
                  placeholder:
                    channel && channel.data.name
                      ? 'Message #' +
                        channel.data.name.toLowerCase().replace(' ', '_')
                      : 'Message',
                }}
              /> */}
            </Channel>
          </Chat>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
});
export default ChannelScreen;
