import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { createCar, getCarTypes, getCarTags, CreateCarRequest } from '../../redux/Reducers';

export const validationSchema = Yup.object().shape({
  imageUrl: Yup.string()
    .url('Please enter a valid URL')
    .required('Car image URL is required'),
  name: Yup.string()
    .trim()
    .min(1, 'Car name is required')
    .max(50, 'Car name must be 50 characters or less')
    .required('Car name is required'),
  description: Yup.string()
    .trim()
    .max(200, 'Description must be 200 characters or less'),
  carType: Yup.string()
    .required('Car type is required'),
  tags: Yup.array()
    .min(1, 'At least one specification is required')
    .required('At least one specification is required'),
});

export const initialValues: CreateCarRequest = {
  imageUrl: '',
  name: '',
  description: '',
  carType: 'automatic',
  tags: [],
};

export default function useAddCarScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { carTypes, carTags, createLoading } = useAppSelector(state => state.carSlice);

  const [showCarTypeSelect, setShowCarTypeSelect] = useState(false);
  const [showSpecSelect, setShowSpecSelect] = useState(false);

  const loadInitialData = useCallback(async () => {
    try {
      await Promise.all([
        dispatch(getCarTypes(null)).unwrap(),
        dispatch(getCarTags(null)).unwrap(),
      ]);
    } catch (error) {
      console.error('Failed to load initial data:', error);
      Alert.alert('Error', 'Failed to load form data. Please try again.');
    }
  }, [dispatch]);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const handleSubmit = async (values: CreateCarRequest, { setSubmitting }: any) => {
    try {
      await dispatch(createCar(values)).unwrap();
      Alert.alert('Success', 'Car added successfully', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      console.error('Failed to add car:', error);
      Alert.alert('Error', 'Failed to add car. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return {
    validationSchema,
    initialValues,
    handleSubmit,
    carTypes,
    carTags,
    createLoading,
    showCarTypeSelect,
    setShowCarTypeSelect,
    showSpecSelect,
    setShowSpecSelect,
    onBackPress,
  } as const;
}


