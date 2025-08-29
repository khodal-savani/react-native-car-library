import { Platform, LogBox } from 'react-native';
import { showToast } from '../../utils/alert';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
]);

const showErrorToast = (message: string) => {
  try {
    showToast(message, 'Error', 'error');
  } catch {
    // noop
  }
};

const globalErrorHandler = (error: any, isFatal?: boolean) => {
  console.error('Global JS Error:', error, { isFatal });
  const message = isFatal ? 'A fatal error occurred.' : error?.message || 'Unexpected error occurred.';
  showErrorToast(message);
};

const rejectionHandler = (event: any) => {
  console.error('Unhandled promise rejection:', event?.reason || event);
  const message = event?.reason?.message || 'Unhandled promise rejection';
  showErrorToast(message);
};

if (typeof ErrorUtils !== 'undefined' && (ErrorUtils as any).setGlobalHandler) {
  (ErrorUtils as any).setGlobalHandler(globalErrorHandler);
}

if (typeof globalThis !== 'undefined') {
  const g: any = globalThis as any;
  if (!g.__UNHANDLED_REJECTION_INSTALLED__) {
    g.__UNHANDLED_REJECTION_INSTALLED__ = true;
    if (typeof g.addEventListener === 'function') {
      g.addEventListener('unhandledrejection', rejectionHandler);
    } else if (typeof g.onunhandledrejection === 'undefined') {
      g.onunhandledrejection = rejectionHandler;
    }
  }
}

if (Platform.OS === 'ios' || Platform.OS === 'android') {
  // No-op; React Native routes fatal errors to red screen in dev
}

export {};


