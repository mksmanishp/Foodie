import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import { homeStyles } from '@unistyles/homeStyles';
import { useSharedState } from '@features/tabs/SharedContext';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';
import RollingContent from 'react-native-rolling-bar';

const searchItems: string[] = [
  'Seacrh "chai samosa" ',
  'Seacrh "Cake" ',
  'Seacrh "ice cream" ',
  'Seacrh "pizza" ',
  'Seacrh "Biryani" ',
  'Seacrh "apple pie" ',
];
const SearchBar = () => {
  const { styles } = useStyles(homeStyles);
  const isVegMode = true;
  const { scrollyGlobal } = useSharedState();
  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollyGlobal.value, [0, 80], [255, 0]);
    return {
      color: `rgb(${textColor},${textColor},${textColor})`,
    };
  });
  return (
    <>
      <SafeAreaView />
      <View style={[styles.flexRowBetween, styles.padding]}>
        <TouchableOpacity
          style={styles.searchInputContainer}
          activeOpacity={0.8}
        >
          <Image
            source={require('@assets/icons/search.png')}
            style={{ height: 20, width: 20 }}
          />
          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}
          >
            {searchItems?.map((item, index) => (
              <CustomText
                fontSize={12}
                fontFamily="Okra-Medium"
                key={index}
                style={styles.rollingText}
              >
                {item}
              </CustomText>
            ))}
          </RollingContent>
          <Icon
            iconFamily="Ionicons"
            name="mic-outline"
            color="#ff0000"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
