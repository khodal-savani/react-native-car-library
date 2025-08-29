import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CarFilters } from '../../types';
import { styles } from './SortModalStyles';
import { Icons } from '../../assets';

interface SortModalProps {
  visible: boolean;
  onClose: () => void;
  onSort: (sortBy: string, sortOrder: string) => void;
  currentSort?: CarFilters;
}

export function SortModal({ visible, onClose, onSort, currentSort }: SortModalProps) {
  const sortOptions = [
    { label: 'Sort by A - Z', sortBy: 'name', sortOrder: 'ASC' },
    { label: 'Sort by Date Modified', sortBy: 'createdAt', sortOrder: 'DESC' },
  ];

  const isActive = (sortBy: string, sortOrder: string) => {
    return currentSort?.sortBy === sortBy && currentSort?.sortOrder === sortOrder;
  };

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
          
          {sortOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => onSort(option.sortBy, option.sortOrder)}
            >
              <Text style={[
                styles.optionText,
                isActive(option.sortBy, option.sortOrder) && styles.activeOptionText
              ]}>
                {option.label}
              </Text>
              {option.sortOrder === 'ASC' ?
                <Image 
                  source={Icons.sortingDown} 
                  style={[
                    styles.sortingUpDownIcon,
                    isActive(option.sortBy, option.sortOrder) && styles.activeSortingIcon
                  ]} 
                />
               : 
               <Image 
                 source={Icons.sortingUp} 
                 style={[
                   styles.sortingUpDownIcon,
                   isActive(option.sortBy, option.sortOrder) && styles.activeSortingIcon
                 ]} 
               />
              }
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}