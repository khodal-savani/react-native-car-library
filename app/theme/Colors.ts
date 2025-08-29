// Define a type for the color keys used in the Colors object.

type ColorType =
  | 'black'
  | 'white'
  | 'primary'
  | 'lightSlateGray'
  | 'skyBlue'
  | 'red'
  | 'green'
  | 'gray'
  | 'horizonBlue'
  | 'lightBlack'
  | 'lightGreen'
  | 'overlayDark'
  | 'cyan'
  | 'lightGray'
  | 'darkTheme'
  | 'dotColor'
  | 'transparent'
  | 'primaryThemeColor'
  | 'secondaryBackground'
  | 'darkGrey'
  | 'primaryBtnBackground'
  | 'viridianGreen'
  | 'primaryLightTheme'
  | 'argent'
  | 'mediumGray'
  | 'boxBorderColor'
  | 'lightOrange'
  | 'offWhite'
  | 'indigo'
  | 'separatorColor'
  | 'yellow'
  | 'dustGray'
  | 'darkCyan'
  | 'darkGreen'
  | 'placeHolderTextColor'
  | 'success'
  | 'softviolet'
  // Additional tokens mapped from hardcoded usage
  | 'neutral900'
  | 'neutral800'
  | 'neutral700'
  | 'neutral400'
  | 'slate100'
  | 'violet500'
  | 'violet200'
  | 'accentLime'
  | 'accentLimeLight'
  | 'overlay04'
  | 'overlay30'
  | 'overlay50'
  | 'overlay80'
  | 'transparentBlack10'
  | 'transparentBlack8'
  | 'transparentBlack34'
  | 'transparentBlack50'
  | 'neutral500'
  | 'slate300'
  | 'sand100'
  | 'teal600'
  | 'warmBrown'
  | 'red500';

// This object provides a centralized way to manage and reference color values throughout the application, ensuring consistency in color usage.
// Color code should be Hex values.

export const Colors: Record<ColorType, string> = {
  black: '#000000',
  white: '#ffffff',
  primary: '#00909A',
  lightSlateGray: '#99A8B9',
  skyBlue: '#34639A',
  red: '#ff0000',
  green: '#1A7968',
  gray: '#D9D9D9',
  darkGrey: '#757575',
  horizonBlue: '#3B76A1',
  lightBlack: '#4F4F4F',
  lightGreen: '#34C759',
  overlayDark: 'rgba(0,0,0,0.2)',
  cyan: '#E4FFFF',
  lightGray: '#F2F2F2',
  darkTheme: '#00545A',
  primaryThemeColor: '#00909A',
  dotColor: '#00545A',
  transparent: 'transparent',
  secondaryBackground: '#F2F2F7',
  primaryBtnBackground: '#00909A',
  viridianGreen: '#00909A',
  argent: '#939393',
  primaryLightTheme: '#f2fbff',
  mediumGray: '#a3a3a3',
  boxBorderColor: '#D5D5D5',
  lightOrange: '#FF937F',
  offWhite: '#FFE9E5',
  indigo: '#263845',
  separatorColor: '#D5D5D5',
  yellow: '#EDC26E',
  dustGray: '#535353',
  darkCyan: '#8AE0E3',
  darkGreen: '#00363A',
  placeHolderTextColor: '#A3A3A3',
  success: '#54AB6A',
  softviolet: '#8B5CF6',
  // Additional tokens
  neutral900: '#111827',
  neutral800: '#1F2937',
  neutral700: '#374151',
  neutral400: '#9CA3AF',
  slate100: '#E5E7EB',
  violet500: '#9B72D2',
  violet200: 'rgba(155, 114, 210, 0.10)',
  accentLime: '#BCF14B',
  accentLimeLight: '#D6F9DB',
  overlay04: 'rgba(0, 0, 0, 0.04)',
  overlay30: 'rgba(0, 0, 0, 0.30)',
  overlay50: 'rgba(0, 0, 0, 0.5)',
  overlay80: 'rgba(255, 255, 255, 0.8)',
  transparentBlack10: 'rgba(0, 0, 0, .10)',
  transparentBlack8: 'rgba(0, 0, 0, .8)',
  transparentBlack34: 'rgba(0, 0, 0, 0.34)',
  transparentBlack50: 'rgba(0, 0, 0, .50)',
  neutral500: '#6B7280',
  slate300: '#D1D5DB',
  sand100: '#F5E7D0',
  teal600: '#248f5a',
  warmBrown: '#997C4C',
  red500: '#EF4444'
};
