import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { s, verticalScale, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
import AppButton from "../buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ITotalView {
  itemCount: number;
  orderTotal: number; // already discounted
}

const TotalsView: FC<ITotalView> = ({ itemCount, orderTotal }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { rank, discount, medals } = useSelector((state: RootState) => state.userSlice);
  const originalTotal = (orderTotal / (1 - discount)).toFixed(2);

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t("checkout_quantity")}</AppText>
        <AppText style={styles.textPrice}>{itemCount}</AppText>
      </View>


      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t("checkout_subTotal")}</AppText>
        <AppText style={styles.textPrice}>R{originalTotal}</AppText>
      </View>

      <View style={styles.row}>
        <AppText style={styles.textTitle}>
          {`${medals} ${rank} ${t("rank_discount_label")}: `}
        </AppText>
        <AppText style={styles.textPrice}>
          {Math.round(discount * 100)}% {t("checkout_discount")}
        </AppText>
      </View>

      <View style={styles.row}>
        <AppText style={styles.textTitle}>{t("checkout_total")}</AppText>
        <AppText style={styles.textPrice}>R{orderTotal.toFixed(2)}</AppText>
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
    paddingTop: vs(10),
    paddingBottom: vs(10),
    paddingLeft: vs(10),
    paddingRight: vs(10),
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
