import React, { useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Colors from '../constants/Colors';
import CustomInput from './CustomInput';
import CloseIcon from '../assets/icons/globals/close-icon.svg';

interface ChangePasswordModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (currentPassword: string, newPassword: string) => void;
}

export default function ChangePasswordModal({
  visible,
  onClose,
  onSubmit,
}: ChangePasswordModalProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setError('Les nouveaux mots de passe ne correspondent pas');
      return;
    }
    if (newPassword.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    setError('');
    onSubmit(currentPassword, newPassword);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <BlurView
        style={styles.overlay}
        intensity={10}
        tint="dark"
      >
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Modification du mot de passe</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          
          <CustomInput
            label="Mot de passe actuel"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry
            style={styles.input}
          />
          
          <CustomInput
            label="Nouveau mot de passe"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
            style={styles.input}
          />
          
          <CustomInput
            label="Confirmer le nouveau mot de passe"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.submitButton]} 
              onPress={handleSubmit}
            >
              <Text style={[styles.buttonText, styles.submitButtonText]}>Confirmer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxWidth: 350,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Geologica',
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  input: {
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 25,
    width: '45%',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: Colors.darkgreen,
  },
  buttonText: {
    fontFamily: 'Geologica',
    fontSize: 14,
  },
  submitButtonText: {
    color: 'white',
  },
  errorText: {
    color: Colors.red,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Geologica',
    fontSize: 12,
  },
}); 