import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import { s, scale } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import RewardCard from "../../components/cards/RewardCard";
import { getRewardsData } from "../../config/dataServices";
import { FlatList } from "react-native-gesture-handler";
import AppButton from "../../components/buttons/AppButton";
import AppText from "../../components/texts/AppText";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainAppStackParamList } from "../../navigation/MainAppStack";

type RewardsScreenRouteProp = RouteProp<MainAppStackParamList, "RewardsScreen">;

const RewardsScreen = () => {
  const route = useRoute<RewardsScreenRouteProp>();
  const { fromCheckout } = route.params || {};
  const [rewardsList, setRewardsList] = useState([]);

  const fetchRewards = async () => {
    const response = await getRewardsData();
    setRewardsList(response);
  };

  useEffect(() => {
    fetchRewards();
  }, []);

  const navigation = useNavigation();
  const { t } = useTranslation();

  const rank = useSelector((state: RootState) => state.userSlice.rank);

  useEffect(() => {
    if (fromCheckout) {
      if (rank !== "Cadet") {
        Alert.alert("Order Placed!", "Congrats! You've unlocked a new rank.");
      } else {
        Alert.alert(
          "Order Placed",
          "Congrats on completing a full rank cycle. Let's start again!"
        );
      }
    }
  }, [fromCheckout, rank]);

  return (
    <AppSafeView>
      <HomeHeader />
      <View style={styles.mainContainer}>
        <View style={styles.bottomCaptionContainer}>
          <AppText style={styles.instructCaption}>
            {t("rank_instruction")}
          </AppText>
        </View>

        <View style={styles.flatlistContainer}>
          <FlatList
            style={styles.cardsFlatlist}
            data={rewardsList}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <RewardCard
                title={item.label}
                description={item.description}
                medals={item.medals}
                discount={item.discount}
                label={item.label}
                isCurrentRank={item.label === rank}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: s(0) }} />}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            style={styles.orderButton}
            title={t("rank_menuButton")}
            onPress={() => navigation.navigate("MainAppBottomTabs")}
          />
        </View>
      </View>
    </AppSafeView>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
  },
  cardsFlatlist: {
    marginLeft: s(4),
    marginBottom: s(20),
    height: s(370),
  },
  bottomCaptionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: s(10),
  },
  instructCaption: {
    color: AppColors.mainText,
    fontSize: s(16),
    textAlign: "center",
    margin: s(10),
  },
  buttonContainer: {
    paddingHorizontal: s(10),
  },
  orderButton: {
    marginHorizontal: s(20),
  },
  flatlistContainer: {
    marginBottom: s(10),
  },
});
