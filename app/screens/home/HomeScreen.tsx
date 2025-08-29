import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './HomeScreenStyles';
import { Text, View } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Car Library</Text>
        <Text style={styles.subtitle}>Navigate to Car Library to browse cars</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
