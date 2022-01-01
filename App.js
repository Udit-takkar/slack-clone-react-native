import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

/** This is where you will put your channel component which container MessageList and MessageInput component  */
function ChannelScreen({navigation, route}) {
  return (
    <SafeAreaView>
      <Text>Channel Screen</Text>
    </SafeAreaView>
  );
}

const ChannelListDrawer = props => {
  return (
    <SafeAreaView>
      <Text>Drawer</Text>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Drawer.Navigator
          drawerContent={ChannelListDrawer}
          drawerStyle={styles.drawerNavigator}>
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
  drawerNavigator: {
    backgroundColor: '#3F0E40',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
});
