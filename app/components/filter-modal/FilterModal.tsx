import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { CarFilters } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { getCarTypes, getCarTags } from '../../redux/Reducers';
import { styles } from './FilterModalStyles';
import { Icons } from '../../assets';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (filters: { carType?: string; tags?: string[] }) => void;
  currentFilters?: CarFilters;
}

export function FilterModal({ visible, onClose, onFilter, currentFilters }: FilterModalProps) {
  const dispatch = useAppDispatch();
  const carSliceState = useAppSelector(state => state.carSlice);
  
  const carTypes = Array.isArray(carSliceState?.carTypes) ? carSliceState.carTypes : ['automatic', 'manual'];
  const carTypesLoading = Boolean(carSliceState?.carTypesLoading);
  const carTags = Array.isArray(carSliceState?.carTags) ? carSliceState.carTags : ['SUV', 'Sedan', 'Hatchback', 'Sports'];
  const carTagsLoading = Boolean(carSliceState?.carTagsLoading);
  
  const [selectedCarType, setSelectedCarType] = useState<string | undefined>(currentFilters?.carType);
  const [selectedTags, setSelectedTags] = useState<string[]>(currentFilters?.tags || []);

  useEffect(() => {
    if (visible) {
      dispatch(getCarTypes(null));
      dispatch(getCarTags(null));
      setSelectedCarType(currentFilters?.carType);
      setSelectedTags(currentFilters?.tags || []);
    }
  }, [visible, currentFilters, dispatch]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleApply = () => {
    onFilter({
      carType: selectedCarType,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
    });
  };

  const clearFilters = () => {
    setSelectedCarType(undefined);
    setSelectedTags([]);
  };

  if (!carSliceState) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.modal}>
          <View style={styles.handle} />
          
          <View style={styles.header}>
            <Text style={styles.title}>Filter By</Text>
            {(selectedCarType !== undefined || selectedTags.length > 0) && (
              <TouchableOpacity style={styles.resetButton} onPress={clearFilters}>
                <Image source={Icons.reset} style={styles.resetIcon} />
                <Text style={styles.clearText}>Reset</Text>
              </TouchableOpacity>
            )}
          </View>

          <ScrollView style={styles.content}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Car Type</Text>
              <Image source={Icons.upArrow} style={styles.upArrowIcon} />
            </View>
            <View style={styles.optionsContainer}>
              {carTypesLoading ? (
                <Text style={styles.loadingText}>Loading car types...</Text>
              ) : (
                carTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.filterChip,
                      selectedCarType === type && styles.selectedChip
                    ]}
                    onPress={() => setSelectedCarType(selectedCarType === type ? undefined : type)}
                  >
                    <Text style={[
                      styles.chipText,
                      selectedCarType === type && styles.selectedChipText
                    ]}>
                      {type === 'automatic' ? 'Automatic' : 'Manual'}
                    </Text>
                  </TouchableOpacity>
                ))
              )}
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Tags</Text>
              <Image source={Icons.upArrow} style={styles.upArrowIcon} />
            </View>
            <View style={styles.tagsContainer}>
              {carTagsLoading ? (
                <Text style={styles.loadingText}>Loading tags...</Text>
              ) : (
                carTags.map((tag) => (
                  <TouchableOpacity
                    key={tag}
                    style={[
                      styles.filterChip,
                      selectedTags.includes(tag) && styles.selectedChip
                    ]}
                    onPress={() => toggleTag(tag)}
                  >
                    <Text style={[
                      styles.chipText,
                      selectedTags.includes(tag) && styles.selectedChipText
                    ]}>
                      {tag}
                    </Text>
                  </TouchableOpacity>
                ))
              )}
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}