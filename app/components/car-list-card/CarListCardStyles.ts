import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
    flex: 1,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    overflow: 'hidden',
  },
  carImage: {
    height: horizontalScale(106),
    resizeMode: 'cover',
    borderRadius: moderateScale(10),
  },
  transView: {
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(10),
  },
  transText: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(12),
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(8),
    textTransform: 'capitalize',
    borderRadius: moderateScale(6),
  },
  manual: {
    color: Colors.teal600,
    backgroundColor: Colors.accentLimeLight,
  },
  auto: {
    color: Colors.warmBrown,
    backgroundColor: Colors.sand100,
  },
  titleView: {
    position: 'absolute',
    bottom: verticalScale(10),
    left: horizontalScale(10),
    right: horizontalScale(10),
  },
  titleText: {
    fontSize: moderateScale(11.86),
    color: Colors.white,
    fontFamily: 'Nunito-Regular',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: moderateScale(12),
    borderBottomRightRadius: moderateScale(12),
    height: verticalScale(106),
    justifyContent: 'flex-end',
  },
});

export default styles;
