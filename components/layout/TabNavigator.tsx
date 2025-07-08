import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import CameraPage from '../../pages/CameraScreen'
import ProfilPage from '../../pages/ProfilScreen'
import HomePage from '../../pages/HomeScreen'
import ObjectifPage from '../../pages/ObjectifsScreen'

import CameraIconActive from '../../assets/icons/nav/camera-active.svg'
import CameraIconInactive from '../../assets/icons/nav/camera-inactive.svg'
import HomeIconInactive from '../../assets/icons/nav/home-inactive.svg'
import HomeIconActive from '../../assets/icons/nav/home-active.svg'
import ObjectifIconActive from '../../assets/icons/nav/objectifs-active.svg'
import ObjectifIconInactive from '../../assets/icons/nav/objectifs-inactive.svg'
import ProfileIconActive from '../../assets/icons/nav/profil-active.svg'
import ProfileIconInactive from '../../assets/icons/nav/profil-inactive.svg'

export type TabParamList = {
  Home: undefined
  Camera: undefined
  Profile: undefined
  Objectif: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

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
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused, size }) => (
              focused ? <HomeIconActive height={size} width={size} /> : <HomeIconInactive height={size} width={size} />
            )
          }}
        />

        <Tab.Screen 
          name="Camera" 
          component={CameraPage} 
          options={{
            tabBarIcon: ({ focused, size }) => (
              focused ? <CameraIconActive height={size} width={size} /> : <CameraIconInactive height={size} width={size} />
            )
          }}
        />

        <Tab.Screen
            name="Objectif"
            component={ObjectifPage}
            options={{
                tabBarIcon: ({ focused, size }) => (
                    focused ? <ObjectifIconActive height={size} width={size} /> : <ObjectifIconInactive height={size} width={size} />
                )
            }}
        />

        <Tab.Screen 
          name="Profile"
          component={ProfilPage}
          options={{
            tabBarIcon: ({ focused, size }) => (
              focused ? <ProfileIconActive height={size} width={size} /> : <ProfileIconInactive height={size} width={size} />
            )
          }}
        />
      </Tab.Navigator>
  )
}

export default TabNavigator