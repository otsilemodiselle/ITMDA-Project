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

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigation = useNavigation()

  return (
    <AppSafeView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInput placeholder="Username" onChangeText={setUserName}/>
      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppText style={styles.appName}>Sergeant's Orders!</AppText>
      <AppButton title="Create Account" />
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
    height: vs(250),
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
