import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/Views/AppSafeView';

export default function App() {
  return (
    <AppSafeView style={styles.container}>
      <AppText variant='medium'>Hello World!</AppText>
      <AppText variant='bold'>Hello World!</AppText>
    </AppSafeView>
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
