import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface LogoutButtonProps {
  onPress: () => void;
}

export default function LogoutButton({ onPress }: LogoutButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Déconnexion</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.darkgreen,
    padding: 10,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
  },
}); 