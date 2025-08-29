import { Dimensions, StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: Colors.overlay30,
      justifyContent: 'flex-end',
    },
    modal: {
      backgroundColor: Colors.white,
      borderTopLeftRadius: moderateScale(24),
      borderTopRightRadius: moderateScale(24),
      paddingTop: verticalScale(8),
      paddingHorizontal: horizontalScale(20),
      paddingBottom: verticalScale(40),
      height: verticalScale(273),
      maxHeight: screenHeight * 0.6,
    },
    handle: {
      width: horizontalScale(56),
      height: verticalScale(4),
      backgroundColor: Colors.slate300,
      borderRadius: moderateScale(2),
      alignSelf: 'center',
      marginBottom: verticalScale(20),
    },
    option: {
      paddingVertical: verticalScale(16),
      flexDirection: 'row',
      alignItems: 'center',
      gap: horizontalScale(8),
    },
    optionText: {
      color: Colors.black,
      fontSize: moderateScale(16),
      fontFamily: 'Nunito-SemiBold',
    },
    activeOptionText: {
      color: Colors.violet500,
    },
    sortingUpDownIcon: {
      width: horizontalScale(7),
      height: verticalScale(14),
    },
    activeSortingIcon: {
      tintColor: Colors.violet500,
    },
});