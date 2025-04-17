import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { AppColors } from "../../styles/colors";
import { s } from "react-native-size-matters";
import { useTranslation } from "react-i18next";
import AppText from "../texts/AppText";
import { commonStyles } from "../../styles/sharedStyles";

interface IRewardCard {
  title: string;
  description: string;
  medals: string;
  discount: number;
  isCurrentRank?: boolean;
}

const RewardCard: FC<IRewardCard> = ({
  title,
  description,
  medals,
  discount,
  isCurrentRank,
}) => {
  return (
    <View
      style={[
        styles.container,
        isCurrentRank && {
          borderWidth: 2,
          borderColor: AppColors.accentYellow,
        },
      ]}
    >
      <AppText style={styles.header}>{title}</AppText>

      <AppText style={styles.medals}>{medals}</AppText>

      <AppText style={styles.discount}>{discount * 100}% OFF</AppText>

      <AppText style={styles.copy}>{description}</AppText>
    </View>
  );
};

export default RewardCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.surface,
    padding: s(5),
    margin: s(3),
    borderRadius: s(5),
    alignItems: "center",
    width: s(108),
    height: s(360),
    alignContent: "center",
    ...commonStyles.shadow,
  },
  header: {
    fontSize: 22,
    borderBottomWidth: 2,
    borderColor: AppColors.secondaryText,
    marginBottom: s(15),
  },

  copy: {
    fontSize: 16,
    textAlign: "center",
  },
  medals: {
    fontSize: 25,
    marginBottom: s(15),
  },
  discount: {
    fontSize: 25,
    marginBottom: s(15),
  },
});
