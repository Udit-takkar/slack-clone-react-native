import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ChannelScreen from './src/screens/ChannelScreen';
import ChannelList from './src/components/ChannelList';
import chatClient from './src/config/ChatClient';

const ChannelListDrawer = props => {
  return (
    <ChannelList
      client={chatClient}
      changeChannel={channelId => {
        console.log(channelId);
        props.navigation.jumpTo('ChannelScreen', {
          channelId,
        });
      }}
    />
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={ChannelListDrawer}
          screenOptions={{
            drawerStyle: {backgroundColor: '#3F0E40', width: 350},
          }}>
          <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});
