import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';
import AuthButton from './AuthButton';
import Colors from '../constants/Colors';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (email: string, password: string) => void;
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (type === 'register' && password !== confirmPassword) {
      setError('Les mots de passes sont erronés');
      return;
    }
    setError('');
    onSubmit(email, password);
  };

  return (
    <View style={styles.container}>
      <CustomInput label="E-mail" value={email} onChangeText={setEmail} />
      <CustomInput
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {type === 'register' && (
        <CustomInput
          label="Confirmez le mot de passe"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <AuthButton text={type === 'login' ? 'Connexion' : 'Inscription'} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 20,
  },
  errorText: {
    color: Colors.red,
    textAlign: 'center',
    marginVertical: 5,
  },
});
