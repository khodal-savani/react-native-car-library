import { Alert } from 'react-native';
import { appAlertStrings } from './AppStrings';

export const AppAlert = (
  title: string,
  message: string,
  onPositivePress?: () => void,
  onNegativePress?: () => void,
) => {
  Alert.alert(title, message, [
    {
      text: appAlertStrings.ok,
      onPress: () => onPositivePress?.(),
    },
    {
      text: appAlertStrings.cancel,
      onPress: () => onNegativePress?.(),
    },
  ]);
};
