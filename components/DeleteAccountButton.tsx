import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface DeleteAccountButtonProps {
  onPress: () => void;
}

export default function DeleteAccountButton({ onPress }: DeleteAccountButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Supprimer mon compte</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 25,
    width: '60%',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: Colors.darkgreen,
  },
  text: {
    color: Colors.darkgreen,
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
  },
}); 