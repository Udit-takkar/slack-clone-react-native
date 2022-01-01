import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {ChannelHeader} from '../components/ChannelHeader';
import chatClient from '../config/ChatClient';

function ChannelScreen({navigation, route}) {
  const [channel, setChannel] = useState();
  return (
    <SafeAreaView>
      <ChannelHeader
        navigation={navigation}
        channel={channel}
        client={chatClient}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default ChannelScreen;
