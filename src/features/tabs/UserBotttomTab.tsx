import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Delivery from '@features/delivery/Delivery';
import Reorder from '@features/reorder/Reorder';
import Dining from '@features/dining/Dining';
import LiveScreen from '@features/live/LiveScreen';

const UserBottomTab: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      //tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="Delivery" component={Delivery} />
      <Tab.Screen name="Reorder" component={Reorder} />
      <Tab.Screen name="Dining" component={Dining} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  );
};

export default UserBottomTab;

const styles = StyleSheet.create({});
