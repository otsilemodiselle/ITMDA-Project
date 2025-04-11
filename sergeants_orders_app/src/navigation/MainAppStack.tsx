import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../components/cart/CheckoutScreen";
import MyOrders from "../screens/profile/MyOrders";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../store/reducers/userSlice";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../store/store";

const Stack = createStackNavigator();

export default function MainAppStack() {
  const dispatch = useDispatch();
  const {userData} = useSelector((state: RootState) => state.userSlice)
  const isUserLoggedIn = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("USER_DATA");
      console.log(storedUserData)
      if (storedUserData) {
        dispatch(setUserData(JSON.parse(storedUserData)));
      }
    } catch (error) {
      console.error("Error reading stored user data", error);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={userData? "MainAppBottomTabs" : "AuthStack"}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
}
