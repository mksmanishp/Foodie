import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';

const LoginScreen: FC = () => {
  const { styles } = useStyles(loginStyles);
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />

      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
