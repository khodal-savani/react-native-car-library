import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  tabBarBackgroundStyle: {
    backgroundColor: Colors.black,
    borderTopWidth: verticalScale(1),
    borderColor: Colors.gray,
    height: verticalScale(84),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(10),
  },
});
