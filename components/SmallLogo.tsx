import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoSvg from '../assets/logo/logo.svg';

export default function SmallLogo() {
  return (
    <View style={styles.logoContainer}>
      <LogoSvg width={100} height={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 65,
  },
}); 