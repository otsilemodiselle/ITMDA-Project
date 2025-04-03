import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import AppText from "../../components/texts/AppText";
import { vs, s } from "react-native-size-matters";
import {
  sharedMarginBottomMedium,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import AppTextInput from "../../components/inputs/AppTextInput";
import { useState } from "react";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  inputtedLoginEmail: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

  inputtedLoginPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
});

type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const attemptLogin = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        placeholder="Email"
        onChangeText={setEmail}
        control={control}
        name={"inputtedLoginEmail"}
      />
      <AppTextInputController
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        control={control}
        name={"inputtedLoginPassword"}
      />
      <AppText style={styles.appName}>Sergeant's Orders!</AppText>
      <AppButton
        title="Login"
        onPress={handleSubmit((data) => {
          attemptLogin(data);
          navigation.navigate("MainAppBottomTabs");
        })}
      />
      <AppButton
        title="Sign Up"
        style={styles.registerButton}
        textColor={AppColors.accentYellow}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </AppSafeView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: vs(220),
    width: s(250),
    marginBottom: sharedMarginBottomMedium,
  },
  appName: {
    marginBottom: sharedMarginBottomMedium,
  },
  registerButton: {
    backgroundColor: AppColors.mainBackground,
    borderWidth: 1,
    borderColor: AppColors.accentYellow,
  },
});
