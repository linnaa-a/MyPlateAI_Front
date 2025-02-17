import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoSvg from '../assets/logo/logo.svg';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <LogoSvg/>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
