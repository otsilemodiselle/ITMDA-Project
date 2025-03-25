import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Empty = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="food"
        size={s(100)}
        color={AppColors.mainText}
        style={styles.foodIcon}
      />
      <AppText style={styles.title}>Your Cart Is Empty</AppText>
      <AppText style={styles.subTitle}>Browse menu NOW!</AppText>
      <AppButton
        title={"Yes, Sir!"}
        style={styles.redirectToMenuButton}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.mainText,
  },
  subTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.mainText,
    textAlign: "center",
    marginBottom: vs(20),
  },
  redirectToMenuButton: {
    width: "80%",
  },
  foodIcon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
