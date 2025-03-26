import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { verticalScale, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";

interface ITotalView {
  itemCount: number;
  orderTotal: number;
}

const TotalsView: FC<ITotalView> = ({ itemCount, orderTotal }) => {
  return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Order Total:</AppText>
        <AppText style={styles.textPrice}>R{orderTotal}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}>Total Items:</AppText>
        <AppText style={styles.textPrice}>{itemCount}</AppText>
      </View>
    </View>
  );
};

export default TotalsView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    flex: 1,
  },
  textPrice: {
    // flex:1,
  },
});
