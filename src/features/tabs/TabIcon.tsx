import { Colors } from '@unistyles/Constants';
import { ViewStyle, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import React, { FC, memo } from 'react';
import { View, Image } from 'react-native';

import CustomText from '@components/global/CustomText';

// 🖼️ Icons
import Dining from '@assets/tabicons/dining.png';
import DiningFocused from '@assets/tabicons/dining_focused.png';
import Delivery from '@assets/tabicons/delivery.png';
import DeliveryFocused from '@assets/tabicons/delivery_focused.png';
import Reorder from '@assets/tabicons/reorder.png';
import ReorderFocused from '@assets/tabicons/reorder_focused.png';
import Live from '@assets/tabicons/live.png';
import LiveFocused from '@assets/tabicons/live_focused.png';

interface TabProps {
  name: string;
}

interface TabIconProps {
  focused: boolean;
}

// ✅ Common icon size
const styles = {
  width: RFValue(18),
  height: RFValue(18),
};

// ✅ Container style
const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

// ✅ Text styles
const textStyleInActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.lightText,
  fontSize: RFValue(9.5),
};

const textStyleActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.active,
  fontSize: RFValue(9.5),
};

export { styles, tabStyles, textStyleInActive, textStyleActive };

// 🚫 Not focused tab
const TabIcon: FC<TabProps> = memo(({ name }) => {
  const iconSource =
    name === 'Delivery'
      ? Delivery
      : name === 'Dining'
      ? Dining
      : name === 'Reorder'
      ? Reorder
      : Live;

  return (
    <View style={tabStyles}>
      <Image source={iconSource} style={styles} />
      <CustomText style={textStyleInActive}>{name}</CustomText>
    </View>
  );
});

// ✅ Focused tab with optional tintColor
const TabIconFocused: FC<TabProps> = memo(({ name }) => {
  const isVegMode = true; // replace with useAppSelector(state => state.user.isVegMode)

  const getIconSource = () => {
    switch (name) {
      case 'Delivery':
        return DeliveryFocused;
      case 'Dining':
        return DiningFocused;
      case 'Reorder':
        return ReorderFocused;
      case 'Live':
      default:
        return LiveFocused;
    }
  };

  const tintColor = name === 'Live' ? undefined : isVegMode ? 'green' : 'red';

  return (
    <View style={tabStyles}>
      <Image
        source={getIconSource()}
        style={[styles, { tintColor }]}
        resizeMode="contain"
      />
      <CustomText style={textStyleActive}>{name}</CustomText>
    </View>
  );
});

// ✅ Export individual tab icons
export const DeliveryTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <TabIconFocused name="Delivery" /> : <TabIcon name="Delivery" />;

export const ReorderTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <TabIconFocused name="Reorder" /> : <TabIcon name="Reorder" />;

export const DiningTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <TabIconFocused name="Dining" /> : <TabIcon name="Dining" />;

export const LiveTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <TabIconFocused name="Live" /> : <TabIcon name="Live" />;
