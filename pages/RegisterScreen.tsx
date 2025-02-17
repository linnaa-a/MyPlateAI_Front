import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import Logo from '../components/Logo';
import AuthForm from '../components/AuthForm';

export default function RegisterScreen({ navigation }: any) {
  const handleRegister = (email: string, password: string) => {
    console.log('mot de passe emila log :', email, password);
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Bienvenue sur <Text style={styles.bold}>MyPlateAI</Text> !</Text>
        <Text style={styles.subtitle}>Votre assiette parle, notre IA écoute ! 🍽️🤖</Text>
        <AuthForm type="register" onSubmit={handleRegister} />
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Vous avez déjà un compte ?</Text>
          <Text style={styles.bottomLink} onPress={() => navigation.navigate('Login')}
            >
            Connectez-vous !
          </Text>
        </View>
      </View>
    </ScrollView>
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
      marginBottom: 10,
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
  