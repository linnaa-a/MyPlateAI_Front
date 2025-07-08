import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default function ProfilScreen(){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            <Text style={styles.subtitle}>Gérez votre profil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Geologica',
    color: Colors.darkgrey,
  },
})