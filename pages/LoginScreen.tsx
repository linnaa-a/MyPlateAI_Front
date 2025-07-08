import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import Logo from '../components/Logo';
import AuthForm from '../components/AuthForm';


export default function LoginScreen({ navigation }: any) {

  const handleLogin = (email: string, password: string) => {

    console.log('Connexion  avec:', email, password);

    navigation.navigate('Main');
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.title}>Bienvenue sur <Text style={styles.bold}>MyPlateAI</Text> !</Text>
          <Text style={styles.subtitle}>Votre assiette parle, notre IA écoute ! 🍽️🤖</Text>
          <AuthForm type="login" onSubmit={handleLogin} />
          <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Vous n'avez pas encore de compte ?</Text>
          <Text
            style={styles.bottomLink}
            onPress={() => navigation.navigate('Register')}
          >
            Inscrivez-vous !
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'normal',
    marginVertical: 10,
    fontFamily: 'Geologica',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'normal',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Geologica',
  },
  forgotText: {
    fontFamily: 'Geologica',
    fontWeight: 'normal',
    color: Colors.darkgrey,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  bottomContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  bottomText: {
    fontFamily: 'Geologica',
    fontSize: 14,
    color: 'black',
  },
  bottomLink: {
    fontFamily: 'Geologica',
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});
