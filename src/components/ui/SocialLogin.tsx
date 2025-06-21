import { View, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';

const SocialLogin: FC = () => {
  const { styles } = useStyles(phoneStyles);

  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('@assets/icons/google.png')}
          style={styles.gimg}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
