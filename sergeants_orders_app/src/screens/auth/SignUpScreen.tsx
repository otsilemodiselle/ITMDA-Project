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
import { useTranslation } from "react-i18next";

type FormData = yup.InferType<typeof schema>;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const schema = yup.object({
    inputtedRegistrationEmail: yup
      .string()
      .required(t("missing_email"))
      .email(t("invalid_email")),

    inputtedRegistrationUsername: yup
      .string()
      .required(t("missing_username"))
      .min(3, t("username_minimum"))
      .max(20, t("username_maximum"))
      .matches(/^\w+$/, t("username_symbol")),

    inputtedRegistrationPassword: yup
      .string()
      .required(t("missing_password"))
      .min(8, t("short_password"))
      .matches(/[A-Z]/, t("missing_uppercase"))
      .matches(/[a-z]/, t("missing_lowercase"))
      .matches(/\d/, t("missing_number"))
      .matches(/[@$!%*?&]/, t("missing_symbol")),
  });

  const dispatch = useDispatch();

  const onSignUpPress = async (data: FormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.inputtedRegistrationEmail,
        data.inputtedRegistrationPassword
      );
      Alert.alert(t("signup_welcome"));
      navigation.navigate("MainAppBottomTabs");
      const userDataObj = {
        uid: userCredential.user.uid,
      };
      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("email_used");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("invalid_email");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("weak_password");
      } else {
        errorMessage = t("signup_error");
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
        placeholder={t("username_placeholder")}
        control={control}
        name={"inputtedRegistrationUsername"}
      />
      <AppTextInputController
        placeholder={t("email_placeholder")}
        control={control}
        keyboardType="email-address"
        name={"inputtedRegistrationEmail"}
      />
      <AppTextInputController
        placeholder={t("password_placeholder")}
        secureTextEntry
        control={control}
        name={"inputtedRegistrationPassword"}
      />
      <AppText style={styles.appName}>Sergeant's Orders!</AppText>
      <AppButton
        title={t("create_account_button")}
        onPress={handleSubmit(onSignUpPress)}
      />
      <AppButton
        title={t("signin_button")}
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
