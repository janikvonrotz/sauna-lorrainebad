import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import TemperatureScreen from '../screens/TemperatureScreen'
import ContactScreen from '../screens/ContactScreen'
import CapacityMessage from '../components/CapacityMessage'
const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator ({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: <CapacityMessage />
  })
  navigation.headerLayoutPreset = 'center'

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-home' />
        }}
      />
      <BottomTab.Screen
        name='Aare'
        component={TemperatureScreen}
        options={{
          title: 'Aare',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-thermometer' />
        }}
      />
      <BottomTab.Screen
        name='Kontakt'
        component={ContactScreen}
        options={{
          title: 'Kontakt',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='ios-chatboxes' />
        }}
      />
    </BottomTab.Navigator>
  )
}
