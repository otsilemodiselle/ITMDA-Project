import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../../styles/colors";
import { s, vs } from "react-native-size-matters";

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
  style?: TextStyle;
}

const AppTextInput: FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
      placeholderTextColor={AppColors.accentGray}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderRadius: s(20),
    borderWidth: 1,
    borderColor: AppColors.accentGray,
    paddingHorizontal: s(15),
    backgroundColor: AppColors.mainBackground,
    width: "100%",
    marginBottom: vs(10),
    color:AppColors.accentGray,
  },
});
