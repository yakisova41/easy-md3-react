type ColorPalette = {
  "0": string;
  "5": string;
  "10": string;
  "15": string;
  "20": string;
  "25": string;
  "30": string;
  "35": string;
  "40": string;
  "50": string;
  "60": string;
  "70": string;
  "80": string;
  "90": string;
  "95": string;
  "98": string;
  "99": string;
  "100": string;
  [key: string]: string;
};

type ColorSchemes = {
  [keys: string]: string;
  primary: string;
  surfaceTint: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  primaryFixed: string;
  onPrimaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixedVariant: string;
  secondaryFixed: string;
  onSecondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixedVariant: string;
  tertiaryFixed: string;
  onTertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixedVariant: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
};

/**
 * It can be generated in [Material theme builder](https://material-foundation.github.io/material-theme-builder/)
 */
export type MaterialTheme = {
  description: string;
  seed: string;
  coreColors: {
    primary: string;
  };
  extendedColors: string[];
  schemes: {
    light: ColorSchemes;
    "light-medium-contrast": ColorSchemes;
    "light-high-contrast": ColorSchemes;
    dark: ColorSchemes;
    "dark-medium-contrast": ColorSchemes;
    "dark-high-contrast": ColorSchemes;
  };
  palettes: {
    primary: ColorPalette;
    secondary: ColorPalette;
    tertiary: ColorPalette;
    neutral: ColorPalette;
    "neutral-variant": ColorPalette;
    [key: string]: ColorPalette;
  };
};
