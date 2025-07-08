import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";
import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ObjectifsScreen from "./pages/ObjectifsScreen";


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
    	await Font.loadAsync({
    		"Geologica": require("./assets/fonts/geologica.ttf"),
      	});
      	setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
	return <ActivityIndicator size="large" />;
  }

  return (
	<SafeAreaProvider>
      	<NavigationContainer>
			<SafeAreaView style={{ flex: 1}}>
				<Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Objectif" component={ObjectifsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
			</SafeAreaView>
      	</NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
