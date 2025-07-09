import React, { useRef } from 'react'
import { View, StyleSheet, Text, Image, Pressable } from 'react-native'
import { CameraView } from 'expo-camera'
import UseCameraHandler from './CameraHandler.hooks'
import {AnimatedPressable} from "../global/AnimatedPressable";

function CameraHandler() {
  const {
    capturePhoto,
    resetPhoto,
    hasPermission,
    imageUri,
    cameraRef
  } = UseCameraHandler()

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {!imageUri ? (
          <>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
            <CameraView 
              style={styles.camera} 
              ref={cameraRef}
              facing="back"
            />
            <View style={styles.cameraButtonOverlay}>
              <View style={styles.cameraButtonWrapper}>
                <Pressable style={styles.cameraButton} onPress={capturePhoto} />
              </View>
            </View>
          </>
        ) : (
          <>
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
            <View style={styles.buttonOverlay}>
              <AnimatedPressable onPress={resetPhoto} style={styles.resetButton}>
                <Text style={styles.buttonText}>Reprendre</Text>
              </AnimatedPressable>
            </View>
          </>
        )}
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  cameraButtonOverlay: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 20,
  },
  buttonOverlay: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 20,
  },
  cameraButtonWrapper: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  resetButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#007AFF',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: '#007AFF',
    position: 'absolute',
    zIndex: 10,
  },
  topLeft: {
    top: 20,
    left: 20,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 15,
  },
  topRight: {
    top: 20,
    right: 20,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 15,
  },
  bottomLeft: {
    bottom: 20,
    left: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 15,
  },
  bottomRight: {
    bottom: 20,
    right: 20,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 15,
  },
})

export default CameraHandler
