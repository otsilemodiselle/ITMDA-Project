import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { FC } from "react";
import {s} from "react-native-size-matters"
import { AppColors } from "../../styles/colors";
import { AppFonts } from "../../styles/fonts";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "bold" | "medium" | "boldDark" | "mediumDark"
}

const AppText :FC<AppTextProps> = ({ children, style, variant = "medium", ...rest }) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    color: AppColors.mainText,
    fontFamily: AppFonts.Bold,
    fontWeight: "bold"
  },
  boldDark: {
    fontSize: s(18),
    color: AppColors.mainBackground,
    fontFamily: AppFonts.Bold,
    fontWeight: "bold"
  },
  medium: {
    fontSize: s(16),
    color: AppColors.secondaryText,
    fontFamily: AppFonts.Medium,
  },
  mediumDark: {
    fontSize: s(16),
    color: AppColors.mainBackground,
    fontFamily: AppFonts.Medium,
  },
});
