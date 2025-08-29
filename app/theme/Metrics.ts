import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

// Define base guideline dimensions for scaling. These dimensions are used to
// create a baseline for scaling elements based on different screen sizes
let guidelineBaseWidth: number = 375;
let guidelineBaseHeight: number = 812;

// Adjust guideline dimensions if the device is in landscape mode. Swap width and height if the device orientation is landscape.
if (width > height) {
  [guidelineBaseWidth, guidelineBaseHeight] = [guidelineBaseHeight, guidelineBaseWidth];
}

// Function to scale a size horizontally based on the device's width.
const horizontalScale = (size: number): number => (width / guidelineBaseWidth) * size;

// Function to scale a size vertically based on the device's height.
const verticalScale = (size: number): number => (height / guidelineBaseHeight) * size;

// Function to apply moderate scaling to a size, based on a scaling factor.
const moderateScale = (size: number, factor = 0.5): number => size + (horizontalScale(size) - size) * factor;

// Object to determine the platform and device type.
const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTV: Platform.isTV,
};

export { globalMetrics, horizontalScale, verticalScale, moderateScale, height, width };
