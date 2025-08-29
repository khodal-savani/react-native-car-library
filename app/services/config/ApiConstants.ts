import { APP_URL } from './Host';

const ApiConstants = {
  GET_ALL_CARS: (filters?: { search?: string; carType?: string; tags?: string[]; sortBy?: 'name' | 'createdAt'; sortOrder?: 'asc' | 'desc' }) => {
    let url = APP_URL + '/api/cars';
    const params = new URLSearchParams();
    
    if (filters?.search) {
      params.append('search', filters.search);
    }
    
    if (filters?.carType) {
      params.append('carType', filters.carType);
    }
    
    if (filters?.tags && filters.tags.length > 0) {
      // Tags use AND logic, so we append each tag as a separate parameter
      filters.tags.forEach(tag => params.append('tags', tag));
    }
    
    if (filters?.sortBy) {
      params.append('sortBy', filters.sortBy);
    }
    if (filters?.sortOrder) {
      params.append('sortOrder', filters.sortOrder);
    }
    
    const queryString = params.toString();
    return queryString ? `${url}?${queryString}` : url;
  },
  GET_CAR_BY_ID: (id: string) => APP_URL + `/api/cars/${id}`,
  DELETE_CAR: (id: string) => APP_URL + `/api/cars/${id}`,
  CREATE_CAR: APP_URL + '/api/cars',
  GET_CAR_TYPES: APP_URL + '/api/cars/types',
  GET_CAR_TAGS: APP_URL + '/api/cars/tags',
};

export default ApiConstants;
