import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { getCarsList } from '../../redux/Reducers';
import { CarFilters } from '../../types';

const useCarLibraryScreen = () => {
  const dispatch = useAppDispatch();
  const { isLoading, carList } = useAppSelector(state => state.carSlice);
  const [currentFilters, setCurrentFilters] = useState<CarFilters>({});
  const [filters, setFilters] = useState<CarFilters>({});
  const [searchText, setSearchText] = useState('');
  const [isApplyingFilters, setIsApplyingFilters] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchCarList = useCallback(async (requestedFilters?: CarFilters) => {
    const filterParams = requestedFilters ? {
      search: requestedFilters.search,
      carType: requestedFilters.carType,
      tags: requestedFilters.tags,
      sortBy: requestedFilters.sortBy,
      sortOrder: requestedFilters.sortOrder,
    } : null;
    
    dispatch(getCarsList(filterParams))
      .unwrap()
      .then(res => {
        console.log('res', res);
        
        console.log('Cars loaded with filters:', requestedFilters, 'Result:', res);
      })
      .catch(error => {
        console.error('Failed to load cars:', error);
      });
  }, [dispatch]);

  const loadCarsWithFilters = useCallback(async (nextFilters: CarFilters) => {
    console.log('Starting to apply filters:', nextFilters);
    setIsApplyingFilters(true);
    setCurrentFilters(nextFilters);
    setFilters(nextFilters);
    
    try {
      const filterParams = nextFilters ? {
        search: nextFilters.search,
        carType: nextFilters.carType,
        tags: nextFilters.tags,
        sortBy: nextFilters.sortBy,
        sortOrder: nextFilters.sortOrder,
      } : null;
      
      console.log('Dispatching getCarsList with params:', filterParams);
      await dispatch(getCarsList(filterParams)).unwrap();
      console.log('Cars loaded with filters:', nextFilters);
    } catch (error) {
      console.error('Failed to load cars with filters:', error);
    } finally {
      console.log('Clearing loading state');
      setIsApplyingFilters(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCarList();
  }, [fetchCarList]);

  useEffect(() => {
    if (filters.search) {
      setSearchText(filters.search);
    }
  }, [filters.search]);

  useEffect(() => {
    const handler = setTimeout(async () => {
      const normalizedSearch = searchText.trim();
      const currentSearch = filters.search || '';
      if (normalizedSearch === currentSearch) return;
      const newFilters: CarFilters = {
        ...filters,
        search: normalizedSearch.length > 0 ? normalizedSearch : undefined,
      };
      setFilters(newFilters);
      setIsApplyingFilters(true);
      try {
        await loadCarsWithFilters(newFilters);
      } finally {
        setIsApplyingFilters(false);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [filters, loadCarsWithFilters, searchText]);

  const onSubmitSearch = async () => {
    const normalizedSearch = searchText.trim();
    const newFilters: CarFilters = {
      ...filters,
      search: normalizedSearch.length > 0 ? normalizedSearch : undefined,
    };
    setFilters(newFilters);
    setIsApplyingFilters(true);
    try {
      await loadCarsWithFilters(newFilters);
    } finally {
      setIsApplyingFilters(false);
    }
  };

  const handleSort = async (sortBy: string, sortOrder: string) => {
    const newFilters: CarFilters = {
      ...filters,
      sortBy: sortBy as CarFilters['sortBy'],
      sortOrder: sortOrder as CarFilters['sortOrder'],
    };
    setFilters(newFilters);
    setIsApplyingFilters(true);
    try {
      await loadCarsWithFilters(newFilters);
    } finally {
      setIsApplyingFilters(false);
    }
  };

  const handleFilter = async (filterData: { carType?: string; tags?: string[] }) => {
    const newFilters = { ...filters, ...filterData };
    console.log('Applied filters:', newFilters);
    setFilters(newFilters);
    setIsApplyingFilters(true);
    try {
      await loadCarsWithFilters(newFilters);
    } finally {
      setIsApplyingFilters(false);
    }
  };

  const clearAllFilters = async () => {
    const clearedFilters: CarFilters = {};
    setFilters(clearedFilters);
    setIsApplyingFilters(true);
    setSearchText('');
    try {
      await loadCarsWithFilters(clearedFilters);
    } finally {
      setIsApplyingFilters(false);
    }
  };

  const refreshCars = async () => {
    try {
      setIsRefreshing(true);
      await fetchCarList(currentFilters);
    } finally {
      setIsRefreshing(false);
    }
  };

  return {
    isLoading,
    carList,
    currentFilters,
    filters,
    setFilters,
    loadCarsWithFilters,
    isApplyingFilters,
    isRefreshing,
    searchText,
    setSearchText,
    onSubmitSearch,
    handleSort,
    handleFilter,
    clearAllFilters,
    refreshCars,
  };
};

export default useCarLibraryScreen;
