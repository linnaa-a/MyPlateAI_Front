import { useState, useEffect, useRef } from 'react'
import { CameraView, Camera } from 'expo-camera'
import { Alert } from 'react-native'

function UseCameraHandler() {
  const cameraRef = useRef<CameraView>(null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [imageUri, setImageUri] = useState<string | null>(null)


  const requestCameraPermission = async (): Promise<boolean> => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const granted = status === 'granted';
      setHasPermission(granted);
      
      if (!granted) {
        Alert.alert(
          "Permission de caméra requise",
          "Cette application a besoin d'accéder à votre caméra pour prendre des photos."
        );
      }
      
      return granted;
    } catch (error) {
      setHasPermission(false);
      return false;
    }
  };



  useEffect(() => {
    requestCameraPermission();
  }, []);


  const capturePhoto = async () => {
    if (!hasPermission) {
      const granted = await requestCameraPermission();
      if (!granted) {
        return;
      }
    }

    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          imageType: 'jpg',
        })
        if (photo) {
          setImageUri(photo.uri)
        }
      } catch (e) {
        console.error('Error capturing photo:', e)
        Alert.alert(
          "Erreur de capture",
          "Impossible de prendre la photo."
        );
      }
    }
  }




  const resetPhoto = () => {
    setImageUri(null);
  }

  return {
    imageUri,
    hasPermission,
    capturePhoto,
    resetPhoto,
    cameraRef,
    requestCameraPermission
  }
}

export default UseCameraHandler
