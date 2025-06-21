import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from '@components/global/CustomText';

interface BreakerTextProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  lineColor?: string;
  textColor?: string;
  style?: any;
}

const BreakerText: FC<BreakerTextProps> = ({
  text,
  fontSize = 14,
  fontFamily = 'Okra-Medium',
  lineColor = '#ccc',
  textColor = '#000',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.line, { borderColor: lineColor }]} />
      <CustomText
        style={[
          styles.textContainer,
          { fontSize, fontFamily, color: textColor },
        ]}
      >
        {text}
      </CustomText>
      <View style={[styles.line, { borderColor: lineColor }]} />
    </View>
  );
};

export default BreakerText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    borderBottomWidth: 1,
  },
  textContainer: {
    marginHorizontal: 8,
    borderRadius: 10,
  },
});
