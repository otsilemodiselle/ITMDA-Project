import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useTransition } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import AppText from "../../components/texts/AppText";
import { vs, s } from "react-native-size-matters";
import {
  sharedMarginBottomMedium,
  sharedPaddingHorizontal,
} from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { useState } from "react";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import AppTextInputController from "../../components/inputs/AppTextInputController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { fetchOrderCounter, setUserData,  } from "../../store/reducers/userSlice";
import { useTranslation } from "react-i18next";
import { AppDispatch } from "../store/store";

type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const schema = yup.object({
    inputtedLoginEmail: yup
      .string()
      .required(t("missing_email"))
      .email(t("invalid_email")),

    inputtedLoginPassword: yup
      .string()
      .required(t("missing_password"))
      .min(8, t("short_password"))
      .matches(/[A-Z]/, t("missing_uppercase"))
      .matches(/[a-z]/, t("missing_lowercase"))
      .matches(/\d/, t("missing_number"))
      .matches(/[@$!%*?&]/, t("missing_symbol")),
  });

  const dispatch = useDispatch<AppDispatch>();


  const onLoginPress = async (data: FormData) => {
    console.log(data);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.inputtedLoginEmail,
        data.inputtedLoginPassword
      );
      navigation.navigate("MainAppBottomTabs");
      console.log(JSON.stringify(userCredential, null, 3));
      const userDataObj = {
        uid: userCredential.user.uid,
      };
      dispatch(setUserData(userDataObj));
      dispatch(fetchOrderCounter(userCredential.user.uid));
    } catch (error: any) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        errorMessage = t("user_unknown");
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = t("wrong_credentials");
      } else {
        console.log("Here's the error>>>>>>>>>>" + error.code);
        errorMessage = t("login_error");
      }

      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      inputtedLoginEmail: "test1@gmail.com",
      inputtedLoginPassword: "P@ssw0rd",
    },
  });

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController
        placeholder={t("email_placeholder")}
        keyboardType="email-address"
        control={control}
        name={"inputtedLoginEmail"}
      />
      <AppTextInputController
        placeholder={t("password_placeholder")}
        secureTextEntry
        control={control}
        name={"inputtedLoginPassword"}
      />
      <AppText style={styles.appName}>Sergeant's Orders!</AppText>
      <AppButton
        title={t("signin_button")}
        onPress={handleSubmit(onLoginPress)}
      />
      <AppButton
        title={t("signup_button")}
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
