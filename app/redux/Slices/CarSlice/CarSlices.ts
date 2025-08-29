import { createSlice } from '@reduxjs/toolkit';
import { CarListDataProps, Car } from '../../../types';
import { getCarsList, getCarById, deleteCar, getCarTypes, getCarTags, createCar } from '../../Reducers';

interface AuthState {
  isLoading: boolean;
  carList: CarListDataProps[];
  carDetails: Car | null;
  carDetailsLoading: boolean;
  deleteLoading: boolean;
  createLoading: boolean;
  carTypes: string[];
  carTypesLoading: boolean;
  carTags: string[];
  carTagsLoading: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  carList: [],
  carDetails: null,
  carDetailsLoading: false,
  deleteLoading: false,
  createLoading: false,
  carTypes: ['automatic', 'manual'],
  carTypesLoading: false,
  carTags: ['SUV', 'Sedan', 'Hatchback', 'Sports'],
  carTagsLoading: false,
};

const carSlice = createSlice({
  name: 'carSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCarsList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getCarsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carList = action?.payload ?? [];
    });
    builder.addCase(getCarsList.rejected, state => {
      state.isLoading = false;
    });

    builder.addCase(createCar.pending, state => {
      state.createLoading = true;
    });
    builder.addCase(createCar.fulfilled, (state, action) => {
      state.createLoading = false;

      const newCar: CarListDataProps = {
        id: Number(action.payload.id),
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        description: action.payload.description,
        carType: action.payload.carType,
      };
      state.carList.unshift(newCar);
    });
    builder.addCase(createCar.rejected, state => {
      state.createLoading = false;
    });
    
    builder.addCase(getCarTypes.pending, state => {
      state.carTypesLoading = true;
    });
    builder.addCase(getCarTypes.fulfilled, (state, action) => {
      state.carTypesLoading = false;
      state.carTypes = action?.payload ?? ['automatic', 'manual'];
    });
    builder.addCase(getCarTypes.rejected, state => {
      state.carTypesLoading = false;
    });
    
    builder.addCase(getCarTags.pending, state => {
      state.carTagsLoading = true;
    });
    builder.addCase(getCarTags.fulfilled, (state, action) => {
      state.carTagsLoading = false;
      state.carTags = action?.payload ?? ['SUV', 'Sedan', 'Hatchback', 'Sports'];
    });
    builder.addCase(getCarTags.rejected, state => {
      state.carTagsLoading = false;
    });
    
    builder.addCase(getCarById.pending, state => {
      state.carDetailsLoading = true;
    });
    builder.addCase(getCarById.fulfilled, (state, action) => {
      state.carDetailsLoading = false;
      state.carDetails = action?.payload ?? null;
    });
    builder.addCase(getCarById.rejected, state => {
      state.carDetailsLoading = false;
    });

    builder.addCase(deleteCar.pending, state => {
      state.deleteLoading = true;
    });
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      state.deleteLoading = false;
      state.carList = state.carList.filter(car => String(car.id) !== action.payload);
      if (state.carDetails && String(state.carDetails.id) === action.payload) {
        state.carDetails = null;
      }
    });
    builder.addCase(deleteCar.rejected, state => {
      state.deleteLoading = false;
    });
  },
});

export const {} = carSlice.actions;
export default carSlice.reducer;
