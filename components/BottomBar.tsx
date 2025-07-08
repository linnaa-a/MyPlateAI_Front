import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/HomeScreen'
import CameraScreen from '../pages/CameraScreen'
import ObjectifsScreen from '../pages/ObjectifsScreen'

import HomeIconActive from '../assets/icons/nav/home-active.svg'
import CameraIconActive from '../assets/icons/nav/camera-active.svg'
import ObjectifsIconActive from '../assets/icons/nav/objectifs-active.svg'
import ProfilIconActive from '../assets/icons/nav/profil-active.svg'

import HomeIconInactive from '../assets/icons/nav/home-inactive.svg'
import CameraIconInactive from '../assets/icons/nav/camera-inactive.svg'
import ObjectifsIconInactive from '../assets/icons/nav/objectifs-inactive.svg'
import ProfilIconInactive from '../assets/icons/nav/profil-inactive.svg'

type HomeStackParamList = {
  Home: undefined
}

export type TabParamList = {
  HomeStack: undefined
  Camera: undefined
  Animadex: undefined
  ProfileStack: undefined
  SpeciesDetails: undefined
}

const HomeStack = createStackNavigator<HomeStackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

function TabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { 
            minHeight: 70,
            maxHeight: 80,
            paddingTop: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
            elevation: 5,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStackScreen} 
          options={{
            tabBarIcon: ({ focused, size }) => (
              !focused ? <HomeIconInactive height={size} width={size} /> : <HomeIconActive height={size} width={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{
            tabBarIcon: ({ focused, size }) => (
              !focused ? <CameraIconInactive height={size} width={size} /> : <CameraIconActive height={size} width={size} />
            )
          }}
        />
      </Tab.Navigator>
  )
}

export default TabNavigator