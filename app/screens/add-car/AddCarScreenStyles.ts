import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(16),
        gap: horizontalScale(16)
    },
    backButton: {
        width: horizontalScale(30),
        height: verticalScale(30),
        borderRadius: moderateScale(15),
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    backButtonText: {
        fontSize: moderateScale(20),
        color: Colors.neutral900
    },
    headerTitle: {
        color: Colors.black,
        fontSize: moderateScale(24),
        fontFamily: 'Nunito-Bold',
    },
    content: {
        flex: 1
    },
    form: {
        paddingVertical: verticalScale(14),
        paddingHorizontal: horizontalScale(24),
    },
    field: {
        marginBottom: verticalScale(20),
    },
    label: {
        fontSize: moderateScale(14),
        fontFamily: 'Nunito-Regular',
        color: Colors.black,
        marginBottom: verticalScale(6),
    },
    requiredAsterisk: {
        color: Colors.red,
        fontFamily: 'Nunito-Regular'
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    error: {
        color: Colors.red,
        fontFamily: 'Nunito-Regular',
        fontSize: moderateScale(12),
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.transparentBlack10,
        borderRadius: moderateScale(50),
        paddingHorizontal: horizontalScale(24),
        paddingVertical: verticalScale(16),
        fontSize: moderateScale(16),
        fontFamily: 'Nunito-SemiBold',
        backgroundColor:  Colors.white,
    },
    inputError: {
        borderColor: Colors.red,
    },
    textArea: {
        height: verticalScale(126),
        textAlignVertical: 'top',
        borderRadius: moderateScale(14),
    },
    charCount: {
        fontSize: moderateScale(12),
        color: Colors.transparentBlack34,
        fontFamily: 'Nunito-Italic',
        fontStyle: 'italic',
    },
    select: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.transparentBlack10,
        borderRadius: moderateScale(50),
        paddingHorizontal: horizontalScale(24),
        paddingVertical: verticalScale(16),
        fontSize: moderateScale(16),
        fontFamily: 'Nunito-SemiBold',
        backgroundColor:  Colors.white,
    },
    selectText: {
        fontSize: moderateScale(16),
        fontFamily: 'Nunito-SemiBold',
        color: Colors.black,
    },
    upArrowIcon: {
        width: horizontalScale(14),
        height: verticalScale(8),
    },
    selectContainer: {
        position: 'relative'
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        marginTop: verticalScale(8),
        backgroundColor: Colors.white,
        borderRadius: moderateScale(12),
        zIndex: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 4,
    },
    dropdownTop: {
        top: undefined,
        bottom: '100%'
    },
    dropdownOption: {
        paddingHorizontal: horizontalScale(24),
        paddingVertical: verticalScale(14),
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(12)
    },
    dropdownText: {
        fontSize: moderateScale(14),
        color: Colors.black,
        fontFamily: 'Nunito-Regular',
        textTransform: 'capitalize',
    },
    radioOuter: {
        width: horizontalScale(24),
        height: verticalScale(24),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioOuterSelected: {
        backgroundColor: Colors.accentLime,
        borderColor: Colors.accentLime
    },
    radioCheck: {
        color: Colors.black,
        fontSize: moderateScale(16),
    },
    checkboxOuter: {
        width: horizontalScale(24),
        height: verticalScale(24),
        borderRadius: moderateScale(6),
        borderWidth: 1,
        borderColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    checkboxOuterSelected: {
        backgroundColor: Colors.accentLime,
        borderColor: Colors.accentLime
    },
    checkboxCheck: {
        color: Colors.black,
        fontSize: moderateScale(16),
    },
    chipsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: horizontalScale(5),
        marginTop: verticalScale(8)
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: horizontalScale(6),
        paddingHorizontal: horizontalScale(16),
        paddingVertical: verticalScale(6),
        backgroundColor: Colors.violet200,
        borderRadius: moderateScale(6)
    },
    chipText: {
        color: Colors.black,
        fontFamily: 'Nunito-Regular',
        fontSize: moderateScale(14),
        textTransform: 'capitalize'
    },
    chipRemove: {
        color: Colors.black,
        fontFamily: 'Nunito-Regular',
        fontSize: moderateScale(18)
    },
    addButton: {
        backgroundColor: Colors.violet500,
        borderRadius: moderateScale(100),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(56),
        width: horizontalScale(163),
        marginTop: verticalScale(10),
    },
    addButtonDisabled: {
        opacity: 0.6
    },
    addButtonText: {
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: 'Nunito-Bold',
    },
    fieldError: {
        color: Colors.red,
        fontFamily: 'Nunito-Regular',
        fontSize: moderateScale(12),
    },
  });
  