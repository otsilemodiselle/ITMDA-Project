import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <FlashMessage position={"top"} />
          <NavigationContainer>
            <MainAppStack />
          </NavigationContainer>
        </I18nextProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
