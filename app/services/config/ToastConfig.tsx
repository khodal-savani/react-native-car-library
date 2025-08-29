import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast, { BaseToast, BaseToastProps } from 'react-native-toast-message';
import { Colors } from '../../theme';

// Define colors object or import from your theme file
const colors = {
  PRIMARY: Colors.softviolet,
  ERROR_TEXT: Colors.red,
};

const styles = StyleSheet.create({
  appToast: {
    borderLeftColor: colors.PRIMARY,
  },
  appToastText1: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: colors.PRIMARY,
  },
  appToastText2: {
    fontSize: 13,
    textTransform: 'capitalize',
  },
  errorToast: {
    borderLeftColor: colors.ERROR_TEXT,
  },
  errorToastText1: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: colors.ERROR_TEXT,
  },
  errorToastText2: {
    fontSize: 13,
    textTransform: 'capitalize',
  },
});

const AppToast = (props: BaseToastProps) => (
  <SafeAreaView>
    <BaseToast
      {...props}
      text2NumberOfLines={2}
      style={styles.appToast}
      text1Style={styles.appToastText1}
      text2Style={styles.appToastText2}
    />
  </SafeAreaView>
);

const ErrorToast = (props: BaseToastProps) => (
  <SafeAreaView>
    <BaseToast
      {...props}
      text2NumberOfLines={2}
      style={styles.errorToast}
      text1Style={styles.errorToastText1}
      text2Style={styles.errorToastText2}
    />
  </SafeAreaView>
);

const toastConfig = {
  appToast: AppToast,
  error: ErrorToast,
};

const ToastConfig: React.FC = () => {
  return <Toast config={toastConfig} />;
};

export default ToastConfig;
