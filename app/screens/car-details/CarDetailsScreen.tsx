import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import useCarDetailsScreen from './useCarDetailsScreen';
import { styles } from './CarDetailsScreenStyles';
import { Icons } from '../../assets';
import { Colors } from '../../theme';
import ScreenWrapper from '../../components/screen-wrapper/ScreenWrapper';

type RootStackParamList = {
  CarDetail: { id: string };
};

export default function CarDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'CarDetail'>>();
  const { id } = route.params;

  const {
    carDetails,
    carDetailsLoading,
    deleteLoading,
    deleteModalVisible,
    setDeleteModalVisible,
    handleDelete,
    formatDate,
  } = useCarDetailsScreen(id, { onDeleted: () => navigation.goBack() });

  if (carDetailsLoading) {
    return (
      <ScreenWrapper>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.softviolet} />
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icons.cross} style={styles.crossIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>{carDetails?.name}</Text>
        
        <Image source={{ uri: carDetails?.imageUrl }} style={styles.image} />

        <View style={styles.section}>
          <View style={[styles.transmissionBadge, carDetails?.carType === 'automatic' ? styles.auto : styles.manual]}>
            <Text style={[styles.transmissionText, carDetails?.carType === 'automatic' ? styles.auto : styles.manual]}>
              {carDetails?.carType === 'automatic' ? 'Automatic' : 'Manual'}
            </Text>
          </View>
        </View>

        <View style={[styles.section, styles.descriptionSection]}>
          <Text style={styles.sectionTitle}>DESCRIPTION</Text>
          <Text style={styles.description}>{carDetails?.description}</Text>
        </View>

        {carDetails?.tags && carDetails?.tags.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TAGS</Text>
            <View style={styles.tagsContainer}>
              {carDetails?.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {carDetails?.createdAt && (
          <View style={[styles.section, styles.createAtSection]}>
            <Text style={styles.lastUpdated}>
              Last updated: {formatDate(carDetails?.createdAt)}
            </Text>
            <TouchableOpacity onPress={() => setDeleteModalVisible(true)} disabled={deleteLoading}>
              {deleteLoading ? (
                <ActivityIndicator size="small" color={Colors.red500} />
              ) : (
                <Image source={Icons.trash} style={styles.trashIcon} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={deleteModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.deleteModalOverlay}>
          <View style={styles.deleteModal}>
            <Image source={Icons.trash} style={[styles.trashIcon, styles.modalTrashIcon]} />
            <Text style={styles.deleteTitle}>Delete {carDetails?.name}?</Text>
            <Text style={styles.deleteSubtitle}>Are you sure you want to delete this Car?</Text>
            
            <View style={styles.deleteActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteConfirmButton}
                onPress={handleDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? (
                  <ActivityIndicator size="small" color={Colors.white} />
                ) : (
                  <Text style={styles.deleteConfirmText}>Delete</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
}