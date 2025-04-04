import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import {NavigationContainer} from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf")
  })

  if(!fontsLoaded) {
    return <ActivityIndicator size={"large"}/>
  }

  return (
    <>
      <Provider store={store}>
        <FlashMessage position={"top"} />
        <NavigationContainer>
          <MainAppStack/>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
