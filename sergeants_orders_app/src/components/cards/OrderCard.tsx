import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { commonStyles } from '../../styles/sharedStyles'
import { useTranslation } from "react-i18next";

interface IOrderCard {
    cost: number;
    date: string;
}

const OrderCard : FC<IOrderCard> = ({cost, date}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.orderCard}>
      <AppText style={styles.orderCardHeader}>{t("order_header")}</AppText>
      <View style={styles.orderCostGroup}>
        <AppText>{t("order_costField")}</AppText>
        <AppText>R{cost}</AppText>
      </View>
      <View style={styles.orderDateGroup}>
        <AppText>{t("order_dateField")}</AppText>
        <AppText>{date}</AppText>
      </View>
    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
    orderCard:{
        flexDirection: "column",
        width: "95%",
        height: vs(110),
        backgroundColor: AppColors.surface,
        borderRadius: s(5),
        margin: s(10),
        alignItems: "flex-start",
        padding: s(10),
        ...commonStyles.shadow,
    },
    orderCardHeader:{
        marginBottom: vs(10)
    },
    orderCostGroup:{
        flexDirection:"row",
        justifyContent: "space-between",
        width: "100%",
        borderTopWidth: s(1),
        borderColor: AppColors.secondaryText,
        padding: vs(5)
    },
    orderDateGroup:{
        flexDirection:"row",
        justifyContent: "space-between",
        width: "100%",
        padding: vs(5)
    }
})