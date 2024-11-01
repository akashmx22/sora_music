import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    defaultStatus="open"

    screenOptions={
        {
            headerShown: false,
            drawerType : 'back',
            swipeEdgeWidth : 0,
        }
    }
    drawerContent={(props)=> <CustomDrawerContent {...
      props} />}
    >
      <Drawer.Screen name="DRAWER_HOME" component={StackNavigation} />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({})