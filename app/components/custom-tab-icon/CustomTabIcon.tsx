import React, { FC, memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './CustomTabIconStyles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Colors } from '../../theme';

interface CustomTabIconType {
  focused: boolean;
  label: string;
  icon: ImageSourcePropType;
}

const CustomTabIcon: FC<CustomTabIconType> = ({ focused, label, icon }) => {
  const navigation = useNavigation<BottomTabNavigationProp<ParamListBase>>();

  const labelDynamicColor = {
    color: focused ? Colors.lightGreen : Colors.gray,
  };
  const dynamicIconTintColor = {
    tintColor: focused ? Colors.lightGreen : Colors.gray,
  };

  const changeTabHandle = () => navigation.jumpTo(label);

  return (
    <TouchableOpacity
      onPress={changeTabHandle}
      activeOpacity={1}
      style={styles.rootIconViewStyle}
    >
      <View style={styles.imageViewStyle}>
        <Image
          source={icon}
          style={StyleSheet.flatten([styles.imageStyle, dynamicIconTintColor])}
        />
      </View>
      <Text style={StyleSheet.flatten([styles.labelStyle, labelDynamicColor])}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(CustomTabIcon);
