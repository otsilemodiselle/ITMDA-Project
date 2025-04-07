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

const ProfileScreen = () => {

  const navigation = useNavigation()

  return (
    <AppSafeView>
      <HomeHeader />
      {/* <AppText>Hello, User!</AppText> */}
      <View style={styles.buttonsContainer}>
        <ProfileSectionButton title={"My Orders"} onPress={()=>navigation.navigate("MyOrders")}/>
        <ProfileSectionButton title={"My Rewards Ranking"} onPress={()=>{}}/>
        <ProfileSectionButton title={"Language"} onPress={()=>{
          SheetManager.show("LANG_SHEET")
        }}/>
        <ProfileSectionButton title={"Logout"} onPress={()=> {}}/>
      </View>
      <LanguageBottomSheet/>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
  },
});
