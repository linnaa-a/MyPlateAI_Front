import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
  Text
} from 'react-native';
import { BlurView } from 'expo-blur';
import Colors from '../constants/Colors';
import ArrowDownIcon from '../assets/icons/globals/arrow-down-icon.svg';

interface MealModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const LIGHT_BLUE = '#4A90E2';

export default function MealModal({ visible, onClose, title }: MealModalProps) {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(visible);

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
      onClose();
    });
  };

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (modalVisible) {
      closeModal();
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="none"
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <BlurView 
              intensity={100} 
              tint="light"
              style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(255, 255, 255, 0.3)' }]}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
        
        <Animated.View
          style={[
            styles.modalContent,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.handleContainer}>
            <Pressable onPress={closeModal} style={styles.handle}>
              <ArrowDownIcon width={24} height={24} />
            </Pressable>
          </View>

          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>
          
          <View style={styles.content}>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    height: SCREEN_HEIGHT * 0.85,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
    borderWidth: 5,
    borderColor: LIGHT_BLUE,
    borderBottomWidth: 0,
  },
  handleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  handle: {
    padding: 8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Geologica',
  },
  content: {
    flex: 1,
  },
}); 