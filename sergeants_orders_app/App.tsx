import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/Views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function App() {
  return (
    <>
      <FlashMessage position={"top"}/>
      <AppSafeView style={styles.container}>
        <AppText variant='medium'>Hello World!</AppText>
        <AppText 
          variant='bold'
          onPress={() => showMessage({
            message:"Hello World!",
            type: "warning"
          })}
        >
          Hello World!
        </AppText>
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
