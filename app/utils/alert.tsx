import Toast from 'react-native-toast-message';

export const showToast = (
  message: string,
  type?: string,
  alertType?: 'error',
) => {
  message && Toast.hide();
  Toast.show({
    visibilityTime: 2000,
    autoHide: true,
    text1: type,
    text2: message,
    type: alertType ? 'error' : 'appToast',
  });
};
