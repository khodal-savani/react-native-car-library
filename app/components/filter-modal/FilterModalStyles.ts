import { Dimensions, StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
const { height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: Colors.overlay50,
      justifyContent: 'flex-end',
    },
    modal: {
      backgroundColor: Colors.white,
      borderTopLeftRadius: moderateScale(24),
      borderTopRightRadius: moderateScale(24),
      paddingTop: verticalScale(8),
      paddingHorizontal: horizontalScale(24),
      paddingBottom: verticalScale(35),
      maxHeight: screenHeight * 0.8,
    },
    handle: {
      width: horizontalScale(56),
      height: verticalScale(4),
      backgroundColor: Colors.slate300,
      borderRadius: moderateScale(2),
      alignSelf: 'center',
      marginBottom: verticalScale(20),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: moderateScale(24),
      fontFamily: 'Nunito-Bold',
      color: Colors.black,
    },
    resetButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: horizontalScale(10),
    },
    resetIcon: {
      width: horizontalScale(16),
      height: verticalScale(16),
    },
    clearText: {
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-SemiBold',
      color: Colors.black,
    },
    content: {
      maxHeight: screenHeight * 0.5,
    },
    sectionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: verticalScale(12),
      marginTop: verticalScale(24),
    },
    sectionTitle: {
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-ExtraBold',
      color: Colors.black,
      textTransform: 'uppercase',
    },
    upArrowIcon: {
      width: horizontalScale(14),
      height: verticalScale(8),
    },
    optionsContainer: {
      flexDirection: 'row',
      gap: horizontalScale(12),
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: horizontalScale(8),
    },
    filterChip: {
      paddingHorizontal: horizontalScale(16),
      paddingVertical: verticalScale(6),
      borderRadius: moderateScale(36),
      backgroundColor: Colors.overlay04,
      borderWidth: 1,
      borderColor: Colors.transparentBlack10,
    },
    selectedChip: {
      backgroundColor: Colors.violet200,
      borderWidth: 0,
    },
    chipText: {
      fontSize: moderateScale(14),
      color: Colors.black,
      fontFamily: 'Nunito-Regular',
      textTransform: 'capitalize',
    },
    selectedChipText: {
      color: Colors.violet500,
    },
    loadingText: {
      fontSize: moderateScale(14),
      color: Colors.neutral500,
      fontStyle: 'italic',
      textAlign: 'center',
      paddingVertical: verticalScale(20),
    },
    applyButton: {
      backgroundColor: Colors.violet500,
      borderRadius: moderateScale(100),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: verticalScale(24),
      height: verticalScale(56),
      width: horizontalScale(200),
    },
    applyButtonText: {
      color: Colors.white,
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-Bold',
    },
});