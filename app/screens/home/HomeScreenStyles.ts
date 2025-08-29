import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: Colors.neutral900,
    marginBottom: verticalScale(8),
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: Colors.neutral500,
    textAlign: 'center',
  },
});
