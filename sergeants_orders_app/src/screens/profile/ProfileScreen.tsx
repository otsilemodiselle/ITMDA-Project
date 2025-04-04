import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import AppText from "../../components/texts/AppText";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

  const navigation = useNavigation()

  return (
    <AppSafeView>
      <HomeHeader />
      {/* <AppText>Hello, User!</AppText> */}
      <View style={styles.buttonsContainer}>
        <ProfileSectionButton title={"My Orders"} onPress={()=>navigation.navigate("MyOrders")}/>
        <ProfileSectionButton title={"My Rewards Ranking"} onPress={()=>{}}/>
        <ProfileSectionButton title={"Logout"} onPress={()=> {}}/>
      </View>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
  },
});
