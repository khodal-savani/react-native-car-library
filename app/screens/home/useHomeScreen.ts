import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { getCarsList } from '../../redux/Reducers';

const useHomeScreen = () => {
  const dispatch = useAppDispatch();
  const { isLoading, carList } = useAppSelector(state => state.carSlice);

  const fetchCarList = useCallback(async () => {
    dispatch(getCarsList(null))
      .unwrap()
      .then(res => {
        console.log('Res', res);
      });
  }, [dispatch]);

  useEffect(() => {
    fetchCarList();
  }, [fetchCarList]);

  return {
    isLoading,
    carList,
  };
};

export default useHomeScreen;
