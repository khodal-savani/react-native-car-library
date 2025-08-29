import React, { memo, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './CarListCardStyles';
import { CarListCardProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme';

const CarListCard: React.FC<CarListCardProps> = props => {
  const { name, transmission, image, onPress, index = 0 } = props;
  const isManual = transmission === 'manual';

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const delay = Math.min(index * 70, 700);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 320,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 320,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start();
  }, [index, opacity, translateY]);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 6,
    }).start();
  };

  return (
    <Animated.View style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}>
      <TouchableOpacity onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut} activeOpacity={0.8}>
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
    </Animated.View>
  );
};

export default memo(CarListCard);
