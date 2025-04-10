import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, verticalScale, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { useTranslation } from "react-i18next";

interface ITotalView {
  itemCount: number;
  orderTotal: number;
}

const TotalsView: FC<ITotalView> = ({ itemCount, orderTotal }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t("checkout_total")}</AppText>
        <AppText style={styles.textPrice}>R{orderTotal}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t("checkout_quantity")}</AppText>
        <AppText style={styles.textPrice}>{itemCount}</AppText>
      </View>
      <AppButton
        style={styles.checkoutButton}
        title={t("checkout_continueButton")}
        onPress={() => navigation.navigate("CheckoutScreen")}
      />
    </View>
  );
};

export default TotalsView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.surfaceHover,
    borderTopWidth: 1,
    paddingHorizontal: sharedPaddingHorizontal,
    paddingBottom: vs(10),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: vs(20),
    // padding: vs(10),
  },
  textTitle: {
    flex: 1,
    color: AppColors.mainText,
  },
  textPrice: {
    color: AppColors.mainText,
  },
  checkoutButton: {
    marginBottom: vs(10),
  },
});
