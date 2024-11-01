import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import TrackPlayer from 'react-native-track-player';
import { useSetupPlayer } from './src/hooks/useSetupTrackPlayer';


const Stack = createNativeStackNavigator();

const App = () => {
  const onLoad = ()=>{
    console.log("track player setup ...")
  };
  useSetupPlayer({ onLoad });

  //const setupPlayer = async () => {
    //await TrackPlayer.setupPlayer();
    //console.log("track player success");
  //};
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({})