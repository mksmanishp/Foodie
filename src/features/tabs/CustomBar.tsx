import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { useSharedState } from './SharedContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { tabStyles } from '@unistyles/tabStyles';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Colors, screenWidth } from '@unistyles/Constants';
import ScalePress from '@components/ui/ScalePress';
import {
  DeliveryTabIcon,
  DiningTabIcon,
  LiveTabIcon,
  ReorderTabIcon,
} from './TabIcon';

const CustomBar: FC<BottomTabBarProps> = props => {
  const { scrolly } = useSharedState();
  const { state, navigation } = props;
  const bttom = useSafeAreaInsets();
  const { styles } = useStyles(tabStyles);
  const isLiveTabFocused = state.routes[state.index]?.name === 'Live';
  const isVegMode = true;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            scrolly.value === 1
              ? withTiming(100, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const baselLeft = 10;
    const slideValue = state.index == 3 ? 0.23 : 0.24;
    return {
      left: withTiming(baselLeft + state.index * screenWidth * slideValue),
    };
  });

  return (
    <>
      <Animated.View
        style={[
          styles.tabBarContainer,
          animatedStyle,
          {
            backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
          },
        ]}
      >
        <View style={styles.tabContainer}>
          {state?.routes?.map((route, index) => {
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route?.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route?.name);
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route?.key,
              });
            };
            return (
              <ScalePress
                onPress={onPress}
                onLongPress={onLongPress}
                key={index}
                style={[styles.tabItem, isFocused ? styles.focusedTabItem : {}]}
              >
                {route?.name === 'Delivery' && (
                  <DeliveryTabIcon focused={isFocused} />
                )}
                {route?.name === 'Reorder' && (
                  <ReorderTabIcon focused={isFocused} />
                )}
                {route?.name === 'Dining' && (
                  <DiningTabIcon focused={isFocused} />
                )}
                {route?.name === 'Live' && <LiveTabIcon focused={isFocused} />}
              </ScalePress>
            );
          })}
          <View style={styles.verticalLine} />
          <Animated.View
            style={[
              styles.slidingIndicator,
              indicatorStyle,
              {
                backgroundColor: isLiveTabFocused
                  ? '#fff'
                  : isVegMode
                  ? Colors.active
                  : Colors.primary,
              },
            ]}
          />
        </View>
      </Animated.View>
    </>
  );
};

export default CustomBar;

const styles = StyleSheet.create({});
