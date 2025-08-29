import { ImageSourcePropType } from 'react-native';
export interface Car {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  carType: 'automatic' | 'manual';
  tags?: string[];
  createdAt?: string;
  specifications?: {
    engine?: string;
    displacement?: string;
    fuelType?: string;
    mileage?: string;
  };
}
export interface CarListProps {
  id: number;
  name: string;
}
export interface CustomTabIconType {
  focused: boolean;
  label: string;
  icon: ImageSourcePropType;
}
export interface CarListDataProps {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  carType: 'manual' | 'automatic';
}
export interface apiErrorTypes {
  data: string | string[];
}
export interface CarListCardProps {
  name: string;
  transmission: 'automatic' | 'manual';
  image?: string;
  onPress?: () => void;
  index?: number;
}
export interface CarFilters {
  search?: string;
  carType?: string;
  tags?: string[];
  sortBy?: 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}
