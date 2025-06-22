import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';
import { filterStyles } from '@unistyles/filterStyles';

interface SortingAndFiltersProps {
  menuTitle: string;
  options: Record<string, any>;
}

const SortingAndFilters: FC<SortingAndFiltersProps> = ({
  menuTitle,
  options,
}) => {
  const { styles } = useStyles(filterStyles);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filterBar}
    >
      {/* Main Sort Menu Button */}
      <TouchableOpacity style={styles.filterItem}>
        <View style={{ transform: [{ rotate: '90deg' }] }}>
          <Icon
            name="tune-vertical-variant"
            iconFamily="MaterialCommunityIcons"
            size={16}
            color={Colors.text}
          />
        </View>
        <CustomText fontSize={11} fontFamily="Okra-Medium">
          {menuTitle}
        </CustomText>
        <Icon
          name="caret-down"
          iconFamily="Ionicons"
          size={16}
          color={Colors.text}
        />
      </TouchableOpacity>

      {/* Filter Options List */}
      {options?.map((i: string, index: number) => (
        <TouchableOpacity key={index} style={styles.filterItem}>
          <CustomText fontSize={11} fontFamily="Okra-Medium">
            {i}
          </CustomText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SortingAndFilters;
