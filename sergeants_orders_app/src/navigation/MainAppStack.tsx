import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../components/cart/CheckoutScreen";
import MyOrders from "../screens/profile/MyOrders";




const Stack = createStackNavigator()

export default function MainAppStack() {
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="AuthStack" component={AuthStack}/>
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
            <Stack.Screen name="MyOrders" component={MyOrders}/>
        </Stack.Navigator>
    )
}