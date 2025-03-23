import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSafeView from "./src/components/Views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";
import AppTextInput from "./src/components/inputs/AppTextInput";
import SignInScreen  from "./src/screens/auth/SignInScreen";
import SignUpScreen  from "./src/screens/auth/SignUpScreen";
import AuthStack from "./src/navigation/AuthStack";
import {NavigationContainer} from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <NavigationContainer>
        <MainAppStack/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
