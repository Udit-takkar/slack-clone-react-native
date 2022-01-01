import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {ChannelHeader} from '../components/ChannelHeader';
import chatClient from '../config/ChatClient';

function ChannelScreen({navigation, route}) {
  const [channel, setChannel] = useState();

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
  return (
    <SafeAreaView style={styles.channelScreenSaveAreaView}>
      <View style={styles.channelScreenContainer}>
        <ChannelHeader
          navigation={navigation}
          channel={channel}
          client={chatClient}
        />
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
