import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

function CameraScreen() {

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Caméra</Text>
        <Text style={styles.subtitle}>Scannez vos aliments</Text>
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

export default CameraScreen