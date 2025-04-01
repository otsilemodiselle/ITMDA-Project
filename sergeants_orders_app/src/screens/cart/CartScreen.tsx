import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/headers/homeHeader";
import AppSafeView from "../../components/Views/AppSafeView";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalsView from "../../components/cart/TotalsView";
import { productsFlat } from "../../data/productsFlat";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { s } from "react-native-size-matters";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../store/reducers/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        style={{ paddingHorizontal: s(2) }}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <CartItem
              {...item}
              price={item.sum}
              onReducedPress={() => dispatch(removeItemFromCart(item))}
            />
          );
        }}
      />
      <TotalsView />
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  checkoutButton: {
    backgroundColor: AppColors.surfaceHover,
  },
});
