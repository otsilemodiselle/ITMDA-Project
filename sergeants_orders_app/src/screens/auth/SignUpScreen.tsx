import { StyleSheet, Text, View, Image, Alert } from "react-native";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/userSlice";

const schema = yup.object({
  inputtedRegistrationEmail: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

  inputtedRegistrationUsername: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(
      /^\w+$/,
      "Username can only contain letters, numbers, and underscores"
    ),

  inputtedRegistrationPassword: yup
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

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSignUpPress = async (data: FormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.inputtedRegistrationEmail,
        data.inputtedRegistrationPassword
      );
      Alert.alert("Welcome, Soldier!");
      navigation.navigate("MainAppBottomTabs");
      const userDataObj = {
        uid: userCredential.user.uid,
      };
      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email address already in use!";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Email address is invalid!";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak!";
      } else {
        errorMessage = "An error occurred during sign-up";
      }

      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        placeholder="Username"
        control={control}
        name={"inputtedRegistrationUsername"}
      />
      <AppTextInputController
        placeholder="Email"
        control={control}
        keyboardType="email-address"
        name={"inputtedRegistrationEmail"}
      />
      <AppTextInputController
        placeholder="Password"
        secureTextEntry
        control={control}
        name={"inputtedRegistrationPassword"}
      />
      <AppText style={styles.appName}>Sergeant's Orders!</AppText>
      <AppButton title="Create Account" onPress={handleSubmit(onSignUpPress)} />
      <AppButton
        title="Login"
        style={styles.signInButton}
        textColor={AppColors.accentYellow}
        onPress={() => navigation.navigate("SignInScreen")}
      />
    </AppSafeView>
  );
};

export default SignUpScreen;

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
  signInButton: {
    backgroundColor: AppColors.mainBackground,
    borderWidth: 1,
    borderColor: AppColors.accentYellow,
  },
});
