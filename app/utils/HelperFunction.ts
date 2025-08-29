import { appAlertStrings } from './AppStrings';

export const getInitial = (name: string) => {
  if (!name) return '';
  const nameSplit = name?.split(' ');
  if (nameSplit.length > 1) {
    return (
      nameSplit[0]?.charAt(0)?.toUpperCase() +
      nameSplit[1]?.charAt(0)?.toUpperCase()
    );
  } else {
    return nameSplit[0]?.charAt(0)?.toUpperCase();
  }
};

export const parseErrorData = (response: {
  data: string[] & string;
  status: number;
}): string => {
  const isHTMLResponse = /<\s*html/i.test(response?.data);
  if (isHTMLResponse) {
    return 'An unexpected error occurred. Please try again later.';
  }
  if (response?.data) {
    if (Object.keys(response?.data).length == 0 || response.status == 500) {
      return appAlertStrings.something_went_wrong;
    }
    let customErrorMessage = '';
    for (const errorKey in response?.data) {
      customErrorMessage += Array.isArray(response?.data[errorKey])
        ? response?.data[errorKey][0]
        : response?.data[errorKey] + '\n';
    }
    return customErrorMessage;
  } else {
    return appAlertStrings.something_went_wrong;
  }
};
