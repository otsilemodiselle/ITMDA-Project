import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, verticalScale, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";

interface ITotalView {
  itemCount: number;
  orderTotal: number;
}

const TotalsView: FC<ITotalView> = ({ itemCount, orderTotal }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Order Total:</AppText>
        <AppText style={styles.textPrice}>R360.00{orderTotal}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Total Items:</AppText>
        <AppText style={styles.textPrice}>3{itemCount}</AppText>
      </View>
      <AppButton style={styles.checkoutButton} title='Continue' onPress={() => navigation.navigate("CheckoutScreen")}/>
    </View>
  );
};

export default TotalsView;

const styles = StyleSheet.create({
  container:{
    backgroundColor:AppColors.surfaceHover,
    borderTopWidth: 1
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: vs(20),
    // padding: vs(10),
  },
  textTitle: {
    flex: 1,
    color: AppColors.mainText
  },
  textPrice: {
    color: AppColors.mainText
  },
});
