import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import RemindersScreen from '../screens/RemindersScreen';
import MapScreen from '../screens/MapScreen';
import CalculatorScreen from '../screens/CalculatorScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Reminders" component={RemindersScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
