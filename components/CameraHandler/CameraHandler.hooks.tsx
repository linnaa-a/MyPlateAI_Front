import { useState, useEffect, useRef } from 'react'
import { CameraView, Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { Platform, Linking } from 'react-native'

import * as FileSystem from 'expo-file-system'
import {useIsFocused, useNavigation} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {RootStackParamList} from "../StackNavigator/StackNavigator";
import { Alert } from 'react-native'
import { UseAuthContext } from '../../contexts/AuthContext'

interface AssetWithInfo extends MediaLibrary.Asset {
  realUri: string
}

function UseCameraHandler() {
  const cameraRef = useRef<CameraView>(null)
  const [photos, setPhotos] = useState<AssetWithInfo[]>([])
  const [isPhotoPickedFromGallery, setIsPhotoPickedFromGallery] = useState(false)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | null>(null)
  const [showCamera, setShowCamera] = useState(true)
  const [imageSource, setImageSource] = useState<string | null>(null)
  const [imageUri, setImageUri] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Objectif'>>()


  const {
    isAuthenticated
  } = UseAuthContext()

  const requestCameraPermission = async (): Promise<boolean> => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const granted = status === 'granted';
      setHasPermission(granted);
      
      if (!granted) {
        Alert.alert(
          "Permission de caméra requise",
          "Cette application a besoin d'accéder à votre caméra pour prendre des photos. Veuillez autoriser l'accès dans les paramètres.",
          [
            { text: "Annuler", style: "cancel" },
            { text: "Paramètres", onPress: () => Linking.openSettings() }
          ]
        );
      }
      
      return granted;
    } catch (error) {
      setHasPermission(false);
      return false;
    }
  };

  const requestMediaLibraryPermission = async (): Promise<boolean> => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      const granted = status === 'granted';
      setHasMediaLibraryPermission(granted);
      
      if (!granted) {
        Alert.alert(
          "Permission de galerie requise",
          "Cette application a besoin d'accéder à votre galerie pour afficher les photos récentes. Veuillez autoriser l'accès dans les paramètres.",
          [
            { text: "Annuler", style: "cancel" },
            { text: "Paramètres", onPress: () => Linking.openSettings() }
          ]
        );
      }
      
      return granted;
    } catch (error) {
      setHasMediaLibraryPermission(false);
      return false;
    }
  };

  const getGalleryPreview = async () => {
    if (Platform.OS !== 'ios') {
      return
    }

    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) {
      return;
    }

    try {
      const media = await MediaLibrary.getAssetsAsync({
        mediaType: 'photo',
        first: 2,
        sortBy: [[MediaLibrary.SortBy.creationTime, false]],
      })

      const assetsWithInfo = await Promise.all(
        media.assets.map(async (asset) => {
          const assetInfo = await MediaLibrary.getAssetInfoAsync(asset)
          return {
            ...asset,
            realUri: assetInfo.localUri || asset.uri
          }
        })
      )

      setPhotos(assetsWithInfo)

      if (media.assets.length > 0) {
        const asset = media.assets[0]
        const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id)
        setImageUri(assetInfo.localUri || asset.uri)
      }
    } catch (error) {
      console.error('Error getting gallery preview:', error);
    }
  }

  useEffect(() => {
    // Exécuté une seule fois à l'initialisation
    (async () => {
      const cameraPermissionGranted = await requestCameraPermission();
      await requestMediaLibraryPermission();

      if (cameraPermissionGranted) {
        if (Platform.OS === 'ios') {
          getGalleryPreview();
        }
      }
    })();

    return () => {
      // Nettoyage lors de la destruction du composant
      if (cameraRef.current) {
        try {
          cameraRef.current.pausePreview?.();
        } catch (error) {
          console.error('Erreur lors de la libération de la caméra:', error);
        }
      }
    };
  }, []);

  const releaseCamera = () => {
    if (cameraRef.current) {
      if (cameraRef.current.pausePreview) {
        cameraRef.current.pausePreview();
      }
    }
  }

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
          quality: 0.2,
          skipProcessing: true,
          imageType: 'jpg',
          exif: false,
        })
        if (!photo) {
          return
        }
        setImageSource(photo.uri)
        setImageUri(photo.uri)
        setShowCamera(false)
      } catch (e) {
        console.error('Error capturing photo:', e)
        Alert.alert(
          "Erreur de capture",
          "Impossible de prendre la photo. Vérifiez que la caméra est disponible."
        );
      }
    }
  }

  const pickImage = async () => {
    // Request image picker permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        "Permission requise",
        "L'accès à la galerie est nécessaire pour sélectionner une image.",
        [
          { text: "Annuler", style: "cancel" },
          { text: "Paramètres", onPress: () => Linking.openSettings() }
        ]
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: Platform.OS === 'android' ? [1, 1] : [16, 9],
      quality: 0.3,
      selectionLimit: 1,
      videoMaxDuration: 0,
    })

    if (!result.canceled) {
      setImageSource(result.assets[0].uri)
      setImageUri(result.assets[0].uri)
      setIsPhotoPickedFromGallery(true)
      setShowCamera(false)
    }
  }

  const createBlob = async () => {
    try {
      if (!imageUri) {
        console.warn("Aucune image trouvée !")
        return null
      }

      return {
        uri: imageUri,
        name: 'image.jpg',
        type: 'image/jpeg',
      }

    } catch (error) {
      console.error("Erreur lors de la conversion de l'image en Base64 :", error)
      return null
    }
  }

  const validate = async () => {
    setIsLoading(true)
    if(isAuthenticated) {
      try {
        if (imageUri) {
          if (!isPhotoPickedFromGallery) {
            // Check media library permission before saving
            const hasPermission = hasMediaLibraryPermission || await requestMediaLibraryPermission();
            if (hasPermission) {
              try {
                await MediaLibrary.saveToLibraryAsync(imageUri);
              } catch (error) {
                console.error('Error saving to library:', error);
                // Continue without saving to library
              }
            }
          }

          resetAll()
          navigation.navigate('Objectif')
        }
        await getGalleryPreview()
      } catch (error) {
        console.error('Error in validate:', error)
        Alert.alert("Une erreur s'est produite lors du traitement de l'image")
      } finally {
        setIsLoading(false)
      }
    }
  }

  const resetAll = () => {
    setImageSource(null);
    setImageUri(null);
    setPhotos([]);
    setShowCamera(true);
    setIsPhotoPickedFromGallery(false);
    setIsLoading(false);

    // Forcer le rechargement de la caméra
    if (!showCamera) {
      setTimeout(() => {
        // Only get gallery preview on iOS
        if (Platform.OS === 'ios') {
          getGalleryPreview();
        }
      }, 100);
    }
  }

  return {
    photos,
    imageUri,
    hasPermission,
    hasMediaLibraryPermission,
    showCamera,
    capturePhoto,
    pickImage,
    imageSource,
    validate,
    resetAll,
    isLoading,
    cameraRef,
    requestCameraPermission,
    requestMediaLibraryPermission
  }
}

export default UseCameraHandler
