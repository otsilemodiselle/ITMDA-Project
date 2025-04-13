import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../components/cart/CheckoutScreen";
import MyOrders from "../screens/profile/MyOrders";
import RewardsScreen from "../screens/profile/RewardsScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../store/store";
import { isLoaded, isLoading } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { AppColors } from "../styles/colors";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/firebase";

const Stack = createStackNavigator();

export default function MainAppStack() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<object | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userDataFromFireBase) => {
      if (userDataFromFireBase) {
        console.log("User is Signed In");
        setIsLoading(false);
        setUserData(userDataFromFireBase);
      } else {
        console.log("User is Signed Out");
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: AppColors.mainBackground,
        }}
      >
        <ActivityIndicator size={"large"} color={AppColors.accentYellow} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={userData ? "MainAppBottomTabs" : "AuthStack"}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
    </Stack.Navigator>
  );
}
