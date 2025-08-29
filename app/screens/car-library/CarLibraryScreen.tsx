import React, { useCallback, useMemo, useRef } from 'react';
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CarListCard } from '../../components';
import { CarListDataProps } from '../../types';
import useCarLibraryScreen from './useCarLibraryScreen';
import { styles } from './CarLibraryScreenStyles';
import { SortModal } from '../../components/sort-modal/SortModal';
import { FilterModal } from '../../components/filter-modal/FilterModal';
import Routes from '../../utils/Routes';
import { Icons } from '../../assets';
import { Colors } from '../../theme';
import ScreenWrapper from '../../components/screen-wrapper/ScreenWrapper';

const CarLibraryScreen: React.FC = () => {
  const {
    carList,
    isLoading,
    filters,
    setSearchText,
    searchText,
    onSubmitSearch,
    handleSort,
    handleFilter,
    clearAllFilters,
    isApplyingFilters,
    isRefreshing,
    refreshCars,
  } = useCarLibraryScreen();
  const navigation = useNavigation<any>();
  const inputRef = useRef<TextInput | null>(null);
  const [sortModalVisible, setSortModalVisible] = React.useState(false);
  const [filterModalVisible, setFilterModalVisible] = React.useState(false);

  const handleSubmitAndDismissKeyboard = async () => {
    await onSubmitSearch();
    Keyboard.dismiss();
  };

  const renderItem = useCallback(({ item, index }: { item: CarListDataProps, index: number }) => (
    <CarListCard
      image={item.imageUrl}
      name={item.name}
      transmission={item.carType}
      index={index}
      onPress={() => navigation.navigate(Routes.carDetail, { id: String(item.id) })}
    />
  ), [navigation]);

  const keyExtractor = useCallback((item: CarListDataProps) => String(item.id ?? item.name), []);

  const memoizedData = useMemo(() => carList, [carList]);

  const getFilterDisplayText = () => {
    return Object.entries(filters)
      .filter(([_, value]) => value && (Array.isArray(value) ? value.length > 0 : typeof value === 'string' && value.length > 0))
      .map(([key, value]) => {
        const label = key === 'search' ? 'Search' : 
                    key === 'carType' ? 'Car Type' : 
                    key === 'tags' ? 'Tags' : 
                    key === 'sortBy' ? 'Sort By' : 
                    key === 'sortOrder' ? 'Sort Order' : key;
        
        let displayValue = value;
        if (Array.isArray(value)) {
          displayValue = value.join(', ');
        } else if (key === 'sortOrder') {
          displayValue = value === 'asc' ? 'Ascending' : 'Descending';
        } else if (key === 'sortBy') {
          displayValue = value === 'name' ? 'Name' : 'Date Created';
        } else if (key === 'carType') {
          displayValue = value === 'automatic' ? 'Automatic' : 'Manual';
        }
        
        return `${label}: ${displayValue}`;
      })
      .join(', ');
  };

  const hasActiveFilters = () => {
    return Object.keys(filters).some(key => {
      const value = filters[key as keyof typeof filters];
      return value && (Array.isArray(value) ? value.length > 0 : typeof value === 'string' && value.length > 0);
    });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.rootContainerStyle}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScreenWrapper style={styles.container}>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate(Routes.addCar)}>
            <Text style={styles.addButtonText}>+ New Car</Text>
          </TouchableOpacity>
          
          <View style={styles.actionButtons}>
            <View style={[styles.actionButton, styles.searchInput]}>
              <Image source={Icons.search} style={styles.searchIcon} />
              <TextInput
                ref={ref => {
                  inputRef.current = ref;
                }}
                placeholder="Search cars"
                placeholderTextColor={Colors.neutral400}
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="search"
                onSubmitEditing={handleSubmitAndDismissKeyboard}
                value={searchText}
                onChangeText={setSearchText}
                style={styles.textInput}
              />
              {searchText.length > 0 && (
                <TouchableOpacity onPress={() => setSearchText('')}>
                  <Text>×</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={styles.actionButton} onPress={() => setSortModalVisible(true)}>
              <Image source={Icons.sort} style={styles.sortIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => setFilterModalVisible(true)}>
              <Image source={Icons.filter} style={styles.filterCheckIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={clearAllFilters}>
              <Image source={Icons.roundCheck} style={styles.filterCheckIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            {carList.length > 0 ? (
              <FlatList
                data={memoizedData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={2}
                columnWrapperStyle={styles.listColContainer}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews
                initialNumToRender={8}
                maxToRenderPerBatch={8}
                windowSize={7}
                updateCellsBatchingPeriod={50}
                contentContainerStyle={styles.flatListContent}
                refreshing={isRefreshing}
                onRefresh={refreshCars}
              />
            ) : (
              <View style={styles.noResultsContainer}>
                <Image source={Icons.noData} style={styles.noDataImage} />
                {hasActiveFilters() ? (
                  <Text style={styles.appliedFiltersText}>
                    No results found with {getFilterDisplayText()}
                  </Text>
                ) : (
                  <Text style={styles.appliedFiltersText}>
                    Try adjusting your search or filters
                  </Text>
                )}
              </View>
            )}
            {(isLoading || isApplyingFilters) && !(filters.search && filters.search.length > 0) && (
              <View style={styles.filterLoadingOverlay}>
                <Text style={styles.filterLoadingText}>Fetching Cars...</Text>
              </View>
            )}
          </View>

          <SortModal
            visible={sortModalVisible}
            onClose={() => setSortModalVisible(false)}
            onSort={async (sortBy, sortOrder) => {
              await handleSort(sortBy, sortOrder);
              setSortModalVisible(false);
            }}
            currentSort={filters}
          />

          <FilterModal
            visible={filterModalVisible}
            onClose={() => setFilterModalVisible(false)}
            onFilter={async data => {
              await handleFilter(data);
              setFilterModalVisible(false);
            }}
            currentFilters={filters}
          />
        </ScreenWrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CarLibraryScreen;
