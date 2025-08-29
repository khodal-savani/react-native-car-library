import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    header: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      paddingHorizontal: horizontalScale(24),
      paddingVertical: verticalScale(24),
    },
    crossIcon: {
      width: horizontalScale(14),
      height: verticalScale(14),
    },
    mlAuto: {
      marginLeft: 'auto',
    },
    content: {
      flex: 1,
      paddingHorizontal: horizontalScale(24),
    },
    title: {
      fontSize: moderateScale(32),
      color: Colors.neutral900,
      fontFamily: 'Oswald-Bold',
    },
    image: {
      height: verticalScale(220),
      borderRadius: moderateScale(20),
      backgroundColor: Colors.slate100,
      marginVertical: verticalScale(18),
    },
    descriptionSection: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.transparentBlack10,
      paddingBottom: verticalScale(18),
    },
    createAtSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    section: {
      marginBottom: verticalScale(18),
    },
    sectionTitle: {
      fontSize: moderateScale(14),
      color: Colors.black,
      fontFamily: 'Nunito-ExtraBold',
      marginBottom: verticalScale(6),
    },
    description: {
      fontSize: moderateScale(14),
      color: Colors.black,
      fontFamily: 'Nunito-Regular',
    },
    transmissionBadge: {
      alignSelf: 'flex-start',
      paddingHorizontal: horizontalScale(8),
      paddingVertical: verticalScale(4),
      borderRadius: moderateScale(6),
    },
    transmissionText: {
      fontSize: moderateScale(12),
      fontFamily: 'Nunito-Regular',
      color: Colors.neutral700,
    },
    manual: {
      color: Colors.teal600,
      backgroundColor: Colors.accentLimeLight,
    },
    auto: {
      color: Colors.warmBrown,
      backgroundColor: Colors.sand100,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: horizontalScale(12),
    },
    tag: {
      paddingHorizontal: horizontalScale(12),
      paddingVertical: verticalScale(6),
      borderRadius: moderateScale(6),
      borderWidth: 1,
      borderColor: Colors.violet500,
    },
    tagText: {
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-Regular',
      color: Colors.black,
      textTransform: 'capitalize',
    },
    lastUpdated: {
      fontSize: moderateScale(12),
      fontFamily: 'Nunito-Medium',
      color: Colors.transparentBlack50,
    },
    trashIcon: {
      width: horizontalScale(14),
      height: verticalScale(14),
    },
    modalTrashIcon: {
      marginBottom: verticalScale(16),
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteModalOverlay: {
      flex: 1,
      backgroundColor: Colors.overlay30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteModal: {
      backgroundColor: Colors.white,
      borderRadius: moderateScale(24),
      paddingHorizontal: horizontalScale(24),
      paddingVertical: verticalScale(40),
      marginHorizontal: horizontalScale(32),
      alignItems: 'center',
    },
    deleteTitle: {
      fontSize: moderateScale(16),
      fontFamily: 'Nunito-Bold',
      color: Colors.black,
      textAlign: 'center',
    },
    deleteSubtitle: {
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-Regular',
      color: Colors.black,
      textAlign: 'center',
      marginBottom: verticalScale(26),
    },
    deleteActions: {
      flexDirection: 'row',
      gap: horizontalScale(16),
      width: '100%',
    },
    cancelButton: {
      flex: 1,
      paddingVertical: verticalScale(18),
      borderRadius: moderateScale(100),
      borderWidth: 1,
      borderColor: Colors.black,
      alignItems: 'center',
    },
    cancelButtonText: {
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-Bold',
      color: Colors.black,
    },
    deleteConfirmButton: {
      flex: 1,
      backgroundColor: Colors.black,
      paddingVertical: verticalScale(18),
      borderRadius: moderateScale(100),
      alignItems: 'center',
    },
    deleteConfirmText: {
      fontSize: moderateScale(14),
      fontFamily: 'Nunito-Bold',
      color: Colors.white,
    },
  });
  