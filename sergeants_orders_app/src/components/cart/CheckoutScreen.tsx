import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../Views/AppSafeView";
import HomeHeader from "../headers/homeHeader";
import AppTextInput from "../inputs/AppTextInput";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { vs } from "react-native-size-matters";
import AppButton from "../buttons/AppButton";
import { IS_Android } from "../../constants/constants";
import { useForm } from "react-hook-form";
import AppTextInputController from "../inputs/AppTextInputController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addDoc, collection, doc, increment, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { incrementOrderCounter, setOrderCounter } from "../../store/reducers/userSlice";
import { emptyCart } from "../../store/reducers/cartSlice";
import { MainAppStackParamList } from "../../navigation/MainAppStack";
import { StackNavigationProp } from "@react-navigation/stack";

type NavigationProp = StackNavigationProp<MainAppStackParamList, "CheckoutScreen">;


type FormData = yup.InferType<typeof schema>;

const CheckoutScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  

  const schema = yup
    .object({
      phoneNumber: yup
        .string()
        .required(t("phonenumber_missing"))
        .matches(/^\d{10}$/, t("phonenumber_format")),

      cardName: yup
        .string()
        .required(t("missing_cardname"))
        .matches(/^[a-zA-Z\s]+$/, t("cardname_format"))
        .min(3, t("cardname_minimum"))
        .max(50, t("cardname_maximum")),

      cardNumber: yup
        .string()
        .required(t("missing_cardnumber"))
        .matches(/^\d{16}$/, t("cardnumber_format")),

      cardExpiry: yup
        .string()
        .required(t("missing_expiry"))
        .matches(/^(0[1-9]|1[0-2])\d{2}$/, t("expiry_format")),

      cardCVV: yup
        .string()
        .required(t("missing_cvv"))
        .matches(/^\d{3,4}$/, t("cvv_format")),
    })
    .required();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { userData } = useSelector((state: RootState) => state.userSlice);
  const { items } = useSelector((state: RootState) => state.cartSlice);
  const totalProductsPriceSum = items.reduce((acc, item) => acc + item.sum, 0);

  const saveOrder = async (formData: FormData) => {
    try {
      const orderBody = {
        ...formData,
        items,
        totalProductsPriceSum,
        createdAt: new Date(),
      };

      const userOrderRef = collection(doc(db, "users", userData.uid), "orders");
      await addDoc(userOrderRef, orderBody);

      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, orderBody);

      const userDocRef = doc(db, "users", userData.uid);
      await updateDoc(userDocRef, {
      orderCounter: increment(1),
      });

      dispatch(incrementOrderCounter());

      showMessage({ type: "success", message: "Order Placed Successfully" });
      dispatch(emptyCart());
      navigation.navigate("RewardsScreen", { fromCheckout: true });


      console.log(formData);
    } catch (error) {
      console.error("Error saving order:", error);
      showMessage({ type: "danger", message: "Error Occurred" });
    }
  };

  return (
    <AppSafeView>
      <HomeHeader />
      <View style={styles.checkoutContainer}>
        <View style={styles.container}>
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder={t("placeholder_phonenumber")}
            keyboardType="numeric"
          />
          <AppTextInputController
            control={control}
            name={"cardName"}
            placeholder={t("placeholder_cardname")}
          />
          <AppTextInputController
            control={control}
            name={"cardNumber"}
            placeholder={t("placeholder_cardnumber")}
            keyboardType="numeric"
          />
          <AppTextInputController
            control={control}
            name={"cardExpiry"}
            placeholder={t("placeholder_expiry")}
            keyboardType="numeric"
          />
          <AppTextInputController
            control={control}
            name={"cardCVV"}
            placeholder={t("placeholder_cvv")}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.payButtonContainer}>
          <AppButton title="Pay" onPress={handleSubmit(saveOrder)} />
        </View>
      </View>
    </AppSafeView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  checkoutContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: sharedPaddingHorizontal,
    paddingTop: vs(20),
  },
  payButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    paddingBottom: IS_Android ? vs(15) : 0,
  },
});
