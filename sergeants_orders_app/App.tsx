import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSafeView from "./src/components/Views/AppSafeView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";
import AppTextInput from "./src/components/inputs/AppTextInput";

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />
      <AppSafeView style={styles.container}>
        <AppTextInput
          placeholder="Enter Name"
        />
      </AppSafeView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#121212',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
