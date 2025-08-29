import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
  },
  container: {
    paddingHorizontal: horizontalScale(24),
  },
  addButton: {
    backgroundColor: Colors.softviolet,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
    alignSelf: 'flex-end',
    height: verticalScale(32),
    width: horizontalScale(84),
  },
  addButtonText: {
    color: Colors.white,
    fontSize: moderateScale(12),
    fontFamily: 'Nunito-Bold',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
    marginTop: verticalScale(14),
    marginBottom: verticalScale(16),
  },
  actionButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sortIcon: {
    width: horizontalScale(16),
    height: verticalScale(12),
  },
  filterCheckIcon: {
    width: horizontalScale(16),
    height: verticalScale(16),
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    width: 0,
    minWidth: 0,
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.white,
    gap: horizontalScale(6)
  },
  searchIcon: {
    width: horizontalScale(14),
    height: verticalScale(14),
  },
  textInput: {
    flex: 1,
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-Regular',
    color: Colors.black,
  },
  listColContainer: {
    justifyContent: 'space-between',
    gap: horizontalScale(10)
  },
  listContainer: {
    flex: 1,
    position: 'relative',
  },
  flatListContent: {
    paddingBottom: verticalScale(16),
  },
  filterLoadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.overlay80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  filterLoadingText: {
    fontSize: moderateScale(16),
    color: Colors.softviolet,
    fontFamily: 'Nunito-Medium',
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(8),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
  },
  noDataImage: {
    width: horizontalScale(90),
    height: verticalScale(70),
    marginBottom: verticalScale(20),
  },
  appliedFiltersText: {
    fontSize: moderateScale(16),
    color: Colors.transparentBlack50,
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
  },
});
