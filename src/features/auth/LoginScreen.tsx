import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { FC, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import { resetAndNavigate } from '@utils/NavigationUtils';

const LoginScreen: FC = () => {
  const { styles } = useStyles(loginStyles);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottomTab');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />

      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText fontFamily="Okra-Bold" variant="h2" style={styles.title}>
          India's #1 Food Delivery and Dining App
        </CustomText>
        <BreakerText text="Login in or Sign up" />

        <PhoneInput
          onChangeText={text => setPhone(text)}
          value={phone}
          onFocus={() => {}}
          onBlur={() => {}}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText color="#fff" fontFamily="Okra-Medium" variant="h5">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text=" or " />
        <View style={styles.footer}>
          <CustomText>By continuing,you agree to our</CustomText>
          <View style={styles.footerTextContainer}>
            <CustomText style={styles.footerText}>Terms of Service</CustomText>
            <CustomText style={styles.footerText}>Privacy Policy</CustomText>
            <CustomText style={styles.footerText}>Content Policies</CustomText>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
