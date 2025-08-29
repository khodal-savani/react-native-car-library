import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiErrorTypes, CarListDataProps, Car } from '../../../types';
import { ApiConstants, AxiosClient } from '../../../services';
import { appAlertStrings, parseErrorData, showToast } from '../../../utils';

export interface CreateCarRequest {
  imageUrl: string;
  name: string;
  description: string;
  carType: 'automatic' | 'manual';
  tags: string[];
}

export const getCarsList = createAsyncThunk<
  CarListDataProps[],
  { search?: string; carType?: string; tags?: string[]; sortBy?: 'name' | 'createdAt'; sortOrder?: 'asc' | 'desc' } | null,
  { rejectValue: apiErrorTypes }
>('cars/getCars', async (filters, { rejectWithValue }) => {
  try {
    const response = await AxiosClient.get(ApiConstants.GET_ALL_CARS(filters || undefined));
    return response.data;
  } catch (e: any) {
    if (e.code !== 'ERR_NETWORK') {
      const error = parseErrorData(e.response);
      console.log('error', error);
      
      showToast(error, appAlertStrings.error, 'error');
    }
    return rejectWithValue(e);
  }
});

export const createCar = createAsyncThunk<
  Car,
  CreateCarRequest,
  { rejectValue: apiErrorTypes }
>('cars/createCar', async (carData, { rejectWithValue }) => {
  try {
    const camelCaseData = {
      imageUrl: carData.imageUrl.trim(),
      name: carData.name.trim(),
      description: carData.description.trim(),
      carType: carData.carType,
      tags: carData.tags,
    };
    
    const snakeCaseData = {
      image_url: carData.imageUrl.trim(),
      name: carData.name.trim(),
      description: carData.description.trim(),
      car_type: carData.carType,
      tags: carData.tags,
    };

    if (!carData.name || !carData.imageUrl || !carData.carType || !carData.tags.length) {
      throw new Error('Missing required fields');
    }
    
    let response;
    try {
      response = await AxiosClient.post(ApiConstants.CREATE_CAR, camelCaseData);
    } catch (camelError: any) {
      try {
        response = await AxiosClient.post(ApiConstants.CREATE_CAR, snakeCaseData);
      } catch (snakeError: any) {
        const wrappedData = { car: camelCaseData };
        response = await AxiosClient.post(ApiConstants.CREATE_CAR, wrappedData);
      }
    }
    
    return response.data;
  } catch (e: any) {
    console.error('Error creating car:', e);
    console.error('Error response:', e.response?.data);
    console.error('Error status:', e.response?.status);
    console.error('Error headers:', e.response?.headers);
    
    if (e.code !== 'ERR_NETWORK') {
      const error = parseErrorData(e.response);
      showToast(error, appAlertStrings.error, 'error');
    }
    return rejectWithValue(e);
  }
});

export const getCarTypes = createAsyncThunk<
  string[],
  null,
  { rejectValue: apiErrorTypes }
>('cars/getCarTypes', async (params, { rejectWithValue }) => {
  try {
    const response = await AxiosClient.get(`${ApiConstants.GET_CAR_TYPES}`);
    return response.data;
  } catch (e: any) {
    if (e.code !== 'ERR_NETWORK') {
      const error = parseErrorData(e.response);
      showToast(error, appAlertStrings.error, 'error');
    }
    return rejectWithValue(e);
  }
});

export const getCarTags = createAsyncThunk<
  string[],
  null,
  { rejectValue: apiErrorTypes }
>('cars/getCarTags', async (params, { rejectWithValue }) => {
  try {
    const response = await AxiosClient.get(`${ApiConstants.GET_CAR_TAGS}`);
    return response.data;
  } catch (e: any) {
    if (e.code !== 'ERR_NETWORK') {
      const error = parseErrorData(e.response);
      showToast(error, appAlertStrings.error, 'error');
    }
    return rejectWithValue(e);
  }
});

export const getCarById = createAsyncThunk<
  Car,
  string,
  { rejectValue: apiErrorTypes }
>('cars/getCarById', async (id, { rejectWithValue }) => {
  try {
    const response = await AxiosClient.get(`${ApiConstants.GET_CAR_BY_ID(id)}`);
    return response.data;
  } catch (e: any) {
    if (e.code !== 'ERR_NETWORK') {
      const error = parseErrorData(e.response);
      showToast(error, appAlertStrings.error, 'error');
    }
    return rejectWithValue(e);
  }
});

export const deleteCar = createAsyncThunk<
  string,
  string,
  { rejectValue: apiErrorTypes }
>('cars/deleteCar', async (id, { rejectWithValue }) => {
  try {
    await AxiosClient.delete(`${ApiConstants.DELETE_CAR(id)}`);
    return id;
  } catch (e: any) {
    if (e.code !== 'ERR_NETWORK') {
      const error = parseErrorData(e.response);
      showToast(error, appAlertStrings.error, 'error');
    }
    return rejectWithValue(e);
  }
});
