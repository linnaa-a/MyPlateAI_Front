import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Login from '../../pages/LoginScreen'
import Register from '../../pages/RegisterScreen'
import HomePage from '../../pages/HomeScreen'
import TabNavigator from '../layout/TabNavigator'
import Loader from '../Loader'

export type RootStackParamList = {
  Login: undefined
  Register: undefined
  MainTabs: undefined
  Home: undefined
  Camera: undefined
  Objectif: undefined
  Profile: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

function StackNavigator() {

  return (
      <Stack.Navigator
          initialRouteName={'Login'}
          screenOptions={{
            headerShown: false
          }}
      >
          <Stack.Screen
              name='Login'
              options={{ headerShown: false }}
              component={Login}
          />

          <Stack.Screen
              name='Register'
              options={{ headerShown: false }}
              component={Register}
          />

          <Stack.Screen
              name='Home'
              options={{ headerShown: false }}
              component={HomePage}
          />
      </Stack.Navigator>
  )
}

export default StackNavigator