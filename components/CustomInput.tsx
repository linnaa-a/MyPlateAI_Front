import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function CustomInput({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    top: 10,
    left: 20,
    fontSize: 14,
    color: Colors.darkgrey,
  },
  textInput: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
});

