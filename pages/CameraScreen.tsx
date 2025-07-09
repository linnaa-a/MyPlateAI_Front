import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { styles as globalStyle, theme } from '../styles/global'
import CameraHandler from '../components/CameraHandler/CameraHandler'

function CameraScreen() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={[globalStyle.text, styles.title]}>Caméra</Text>
      <Text style={[globalStyle.text, styles.subtitle]}>Scannez vos aliments</Text>
      
      <View style={styles.cameraContainer}>
        <CameraHandler />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.cream,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: theme.black,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.grey,
  },
  cameraContainer: {
    flex: 1,
    minHeight: 500,
    marginHorizontal: 20,
    marginBottom: 20,
  },
})

export default CameraScreen