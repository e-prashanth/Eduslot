import {responsiveFontSize} from "react-native-responsive-dimensions";
const COLORS = {
  primary: "#5866CE",
  secondary: "#363A3D",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#FFFFFF",
  black:"#000000",
  lightWhite: "#FAFAFC",
  fadeWhite:"#F2F4F5",
};

const FONT = {
  title: "Comfortaa-Bold",
  regular: "Montserrat-Regular",
  medium: "Montserrat-Medium",
  bold: "Montserrat-ExtraBold",
  semi: "Montserrat-SemiBold",
  light: "Montserrat-Light",
};

const SIZES = {
  xSmall: responsiveFontSize(1.2),
  small: responsiveFontSize(1.5),
  medium: responsiveFontSize(2),
  large: responsiveFontSize(2.5),
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
