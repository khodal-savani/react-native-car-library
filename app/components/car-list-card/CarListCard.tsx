import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './CarListCardStyles';
import { CarListCardProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme';

const CarListCard: React.FC<CarListCardProps> = props => {
  const { name, transmission, image, onPress } = props;
  const isManual = transmission === 'manual';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {image ? (
        <Image source={{ uri: image }} style={styles.carImage} />
      ) : (
        <Image source={{ uri: image }} style={styles.carImage} />
      )}
      <LinearGradient
        colors={[Colors.transparent, Colors.transparentBlack34]}
        locations={[0, 1]}
        style={styles.gradientOverlay} />
      <View style={styles.transView}>
        <Text style={[styles.transText, isManual ? styles.manual : styles.auto]}>
          {transmission}
        </Text>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CarListCard);
