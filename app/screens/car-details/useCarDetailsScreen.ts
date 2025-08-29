import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { getCarById, deleteCar } from '../../redux/Reducers';

type UseCarDetailsOptions = {
  onDeleted?: () => void;
};

const useCarDetailsScreen = (id: string, options?: UseCarDetailsOptions) => {
  const dispatch = useAppDispatch();
  const { carDetails, carDetailsLoading, deleteLoading } = useAppSelector(state => state.carSlice);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const onDeleted = options?.onDeleted;

  const fetchCarDetails = useCallback(async () => {
    if (!id) return;
    
    dispatch(getCarById(id))
      .unwrap()
      .then(res => {
        console.log('Car details loaded:', res);
      })
      .catch(error => {
        console.error('Failed to load car details:', error);
      });
  }, [dispatch, id]);

  const handleDeleteCar = useCallback(async () => {
    if (!id) return;
    
    return dispatch(deleteCar(id))
      .unwrap()
      .then(res => {
        console.log('Car deleted successfully:', res);
        return res;
      })
      .catch(error => {
        console.error('Failed to delete car:', error);
        throw error;
      });
  }, [dispatch, id]);

  const handleDelete = useCallback(async () => {
    if (!carDetails) return;

    try {
      await handleDeleteCar();
      setDeleteModalVisible(false);
      onDeleted?.();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  }, [carDetails, handleDeleteCar, onDeleted]);

  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }, []);

  useEffect(() => {
    fetchCarDetails();
  }, [fetchCarDetails]);

  return {
    carDetails,
    carDetailsLoading,
    deleteLoading,
    fetchCarDetails,
    handleDeleteCar,
    deleteModalVisible,
    setDeleteModalVisible,
    handleDelete,
    formatDate,
  };
};

export default useCarDetailsScreen;
