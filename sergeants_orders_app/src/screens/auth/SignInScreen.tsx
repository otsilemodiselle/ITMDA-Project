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

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={styles.appName}>Sergeant's Orders!</AppText>
      <AppButton title="Login" />
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
    height: vs(250),
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
