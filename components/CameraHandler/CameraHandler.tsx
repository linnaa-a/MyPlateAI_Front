import React, { useRef } from 'react'
import { View, StyleSheet, Text, Image, Pressable } from 'react-native'
import { CameraView } from 'expo-camera'
import UseCameraHandler from './CameraHandler.hooks'
import Loader from '../Loader'
import { Platform } from 'react-native'
import {AnimatedPressable} from "../global/AnimatedPressable";

function CameraHandler() {
  const {
    capturePhoto,
    pickImage,
    resetAll,
    validate,
    hasPermission,
    showCamera,
    imageSource,
    imageUri,
    photos,
    isLoading,
    cameraRef
  } = UseCameraHandler()

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.centered}>
      {!isLoading && (
        <>
          {showCamera ? (
            <>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
            </>
          ) : null}
          <View style={styles.container}>
            {showCamera ? (
              <CameraView 
                style={{ flex: 1, width: '100%', height: '100%' }} 
                ref={cameraRef} 
                zoom={Platform.OS === 'ios' ? 1.0 : 0.0}
              ></CameraView>
            ) : (
              <View style={styles.buttonContainer}>
                <AnimatedPressable onPress={resetAll} style={styles.imageContainer}>
                  <Image
                    source={require('../../assets/icons/left-arrow.png')}
                    style={styles.icon}
                  />
                </AnimatedPressable>
                <Pressable style={styles.validateButton} onPress={() => validate()}>
                  <Text style={{ color: 'black' }}>Valider</Text>
                </Pressable>
              </View>
            )}
            {
              imageSource ? (
                <View style={{ flex: 1 }} >
                  <Image source={{ uri: imageSource }} style={{ flex: 1 }} />
                </View>
              ) : null}
          </View>

          {showCamera ? (
            <View style={styles.buttonContainer}>
              {Platform.OS === 'ios' && photos.length > 0 && imageUri && showCamera && (
                <View style={styles.imageContainer}>
                  <Pressable
                    onPress={() => pickImage()}
                  >
                    {photos.map((photo, index) => (
                      <Image
                        key={photo.id}
                        source={{ uri: photo.realUri }}
                        style={[
                          styles.image,
                          index !== 0 && styles.overlappingImage,
                        ]}
                      />
                    ))}
                  </Pressable>
                </View>
              )}
              
              {Platform.OS === 'android' && (
                <View style={styles.androidGalleryButtonContainer}>
                  <AnimatedPressable style={styles.androidGalleryButton} onPress={() => pickImage()}>
                    <Image source={require('../../assets/icons/gallery.png')} style={styles.galleryButtonIcon} />
                  </AnimatedPressable>
                </View>
              )}
              
              <View style={styles.cameraButtonWrapper}>
                <Pressable style={styles.cameraButton} onPress={() => { capturePhoto() }} />
              </View>
            </View>
          ) : null}
        </>
      ) || (
          <Loader />
        )
      }
    </View >
  )
}

const styles = StyleSheet.create({
  iconButton: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  validateButton: {
    position: 'absolute',
    bottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: 'white',
    borderRadius: 50,
    zIndex: 10,
  },
  centered: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    padding: 10,
  },
  cameraButtonWrapper: {
    position: 'relative',
    height: 40,
    width: 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
    borderRadius: 100,
    left: '50%',
    transform: [{ translateX: '-50%' }],
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '15%',
    position: 'absolute',
    bottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  cameraButton: {
    position: "relative",
    backgroundColor: 'white',
    overflow: 'hidden',
    width: 30,
    height: 30,
    marginLeft: 'auto',
    borderRadius: 100,
    marginRight: 'auto',
    zIndex: 100,

  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  corner: {
    width: 30,
    height: 30,
    borderColor: 'turquoise',
    position: 'absolute',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 15,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 15,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 15,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 15,
  },
  imageContainer: {
    position: 'absolute',
    left: '15%',
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
  },
  overlappingImage: {
    position: 'absolute',
    left: 10,
    top: -10,
  },
  androidGalleryButtonContainer: {
    position: 'absolute',
    left: '22%',
    top: '50%',
    transform: [{ translateY: -20 }],
  },
  androidGalleryButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
  galleryButtonIcon: {
    width: 20,
    height: 20,
  },
})

export default CameraHandler
