import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import HomeScreen from "./pages/HomeScreen";
import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
    	await Font.loadAsync({
    		"Geologica": require("/Users/tom/Documents/Work/MyPlateAI-Front/assets/fonts/geologica.ttf"),
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
				<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
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
