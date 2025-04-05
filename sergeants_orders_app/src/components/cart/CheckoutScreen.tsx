import { StyleSheet, Text, View } from "react-native";
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
import {yupResolver} from "@hookform/resolvers/yup"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const schema = yup.object({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  cardName: yup
    .string()
    .required("Cardholder name is required")
    .matches(/^[a-zA-Z\s]+$/, "Cardholder name must only contain letters and spaces")
    .min(3, "Cardholder name is too short")
    .max(50, "Cardholder name is too long"),

  cardNumber: yup
    .string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be exactly 16 digits"),

  cardExpiry: yup
    .string()
    .required("Expiry date is required")
    .matches(/^(0[1-9]|1[0-2])\d{2}$/, "Expiry date must be in MMYY format"),

  cardCVV: yup
    .string()
    .required("CVV is required")
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
}).required();

type FormData = yup.InferType<typeof schema>


const CheckoutScreen = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const {userData} = useSelector((state:RootState) => state.userSlice)

  const saveOrder = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <AppSafeView>
      <HomeHeader />
      <View style={styles.checkoutContainer}>
        <View style={styles.container}>
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <AppTextInputController
            control={control}
            name={"cardName"}
            placeholder="Name on Card"
          />
          <AppTextInputController
            control={control}
            name={"cardNumber"}
            placeholder="Card Number"
            keyboardType="numeric"
          />
          <AppTextInputController
            control={control}
            name={"cardExpiry"}
            placeholder="Expiry Date MMYYYY"
            keyboardType="numeric"
          />
          <AppTextInputController
            control={control}
            name={"cardCVV"}
            placeholder="CVV"
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
