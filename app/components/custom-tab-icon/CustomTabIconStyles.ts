import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootIconViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageViewStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
    marginBottom: verticalScale(4),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  labelStyle: {
    fontSize: moderateScale(12),
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center',
    includeFontPadding: false,
    width: '100%',
    paddingTop: verticalScale(4),
  },
});
