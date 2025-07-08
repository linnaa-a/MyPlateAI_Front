import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import SmallLogo from '../components/SmallLogo';
import CustomInput from '../components/CustomInput';
import LogoutButton from '../components/LogoutButton';
import DeleteAccountButton from '../components/DeleteAccountButton';
import ChangePasswordModal from '../components/ChangePasswordModal';

export default function ProfileScreen({ navigation }: any) {
  const [email, setEmail] = React.useState('');
  const [isChangePasswordVisible, setIsChangePasswordVisible] = React.useState(false);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleChangePassword = () => {
    setIsChangePasswordVisible(true);
  };

  const handleClosePasswordModal = () => {
    setIsChangePasswordVisible(false);
  };

  const handlePasswordChange = (currentPassword: string, newPassword: string) => {
    console.log('okk:', { currentPassword, newPassword });
    setIsChangePasswordVisible(false);
  };

  const handleDeleteAccount = () => {
    console.log('delete okk');
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.pageTitle}>Mon Profil</Text>
        <View style={styles.container}>
          <SmallLogo />
          <CustomInput 
            label="E-mail" 
            value={email} 
            onChangeText={setEmail}
            editable={false}
          />
          <Text
            style={styles.changePasswordLink}
            onPress={handleChangePassword}
          >
            Modifier mon mot de passe
          </Text>
          <LogoutButton onPress={handleLogout} />
          <DeleteAccountButton onPress={handleDeleteAccount} />
        </View>
      </ScrollView>

      <ChangePasswordModal
        visible={isChangePasswordVisible}
        onClose={handleClosePasswordModal}
        onSubmit={handlePasswordChange}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Geologica',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  changePasswordLink: {
    fontFamily: 'Geologica',
    fontSize: 12,
    color: 'black',
    marginTop: 10,
    marginBottom: 25,
    textDecorationLine: 'underline',
  },
}); 