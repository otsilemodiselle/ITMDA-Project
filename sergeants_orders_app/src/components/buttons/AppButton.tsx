import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import { vs, s } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import { sharedMarignBottomSmall } from "../../styles/sharedStyles";

interface AppButtonProps {
  onPress: () => void; // Corrected onPress type
  title: string; // Corrected title type
  style?: ViewStyle; // Made style optional
  styleTitle?: ViewStyle; // Made styleTitle optional
  backgroundColor?: string; // Added default backgroundColor prop
  textColor?: string; // Added default textColor prop
  disabled?: boolean; // Added disabled prop
}

const AppButton: FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor = AppColors.accentYellow,
  textColor = AppColors.mainBackground,
  style,
  styleTitle = {}, // Default to an empty object if not passed
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: disabled ? AppColors.accentGray : backgroundColor },
        style,
      ]}
      disabled={disabled}
    >
      <AppText style={[styles.textTitle, { color: textColor }, styleTitle]} variant="boldDark">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center",
    marginBottom: sharedMarignBottomSmall
  },
  textTitle: {
    // You can add text style here if needed
  },
});
