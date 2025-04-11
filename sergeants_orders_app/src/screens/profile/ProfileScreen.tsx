import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("USER_DATA")
    navigation.navigate("AuthStack")
    await signOut(auth)
  }

  return (
    <AppSafeView>
      <HomeHeader />
      {/* <AppText>Hello, User!</AppText> */}
      <View style={styles.buttonsContainer}>
        <ProfileSectionButton
          title={t("profile_myOrders")}
          onPress={() => navigation.navigate("MyOrders")}
        />
        <ProfileSectionButton
          title={t("profile_myRewards")}
          onPress={() => {}}
        />
        <ProfileSectionButton
          title={t("profile_language")}
          onPress={() => {
            SheetManager.show("LANG_SHEET");
          }}
        />
        <ProfileSectionButton title={t("profile_logout")} onPress={handleLogout} />
      </View>
      <LanguageBottomSheet />
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
  },
});
