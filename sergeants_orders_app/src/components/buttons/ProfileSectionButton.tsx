import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

interface IProfileSectionButton{
  onPress: () => void;
  title: string;
}

const ProfileSectionButton: FC<IProfileSectionButton> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
      </View>

      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColors.secondaryText}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileSectionButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: AppColors.accentGray,
    paddingBottom: vs(10),
    marginTop: vs(14),
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  textContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: s(18),
  },
  textTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.secondaryText,
  },
});
