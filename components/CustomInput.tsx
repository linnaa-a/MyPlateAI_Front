import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import ShowPwdIcon from '../assets/icons/globals/show-pwd-icon.svg';
import HidePwdIcon from '../assets/icons/globals/hide-pwd-icon.svg';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  editable?: boolean;
  style?: ViewStyle;
}

export default function CustomInput({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  editable = true,
  style,
}: CustomInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.input, style]}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            editable={editable}
          />
          {secureTextEntry && (
            <TouchableOpacity
              style={styles.visibilityButton}
              onPress={togglePasswordVisibility}
            >
              {isPasswordVisible ? <HidePwdIcon /> : <ShowPwdIcon />}
            </TouchableOpacity>
          )}
        </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingRight: 40,
  },
  visibilityButton: {
    position: 'absolute',
    right: 0,
    padding: 5,
  },
});

