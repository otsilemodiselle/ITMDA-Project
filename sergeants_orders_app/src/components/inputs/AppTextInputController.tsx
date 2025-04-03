import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import AppTextInput from "./AppTextInput";

const AppTextInputController = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AppTextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({});
