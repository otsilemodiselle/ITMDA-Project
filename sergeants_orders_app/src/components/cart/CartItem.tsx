import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import { commonStyles } from "../../styles/sharedStyles";

const tempItem = {
  id: 4,
  price: 90,
  title:
    "Sergeant's Mouthful Burger - Coleslaw, Chicken Patty and Mac n Cheese",
  category: "Burgers",
  imageURL:
    "https://github.com/otsilemodiselle/ITMDA-Project/blob/e73d6d1fd29dfa6bf6adebc28f59e4f831ce4cb8/sergeants_orders_app/src/assets/images/mac_n_cheese_chicken_burger.png?raw=true",
  onAddItem: () => {},
  onReduceItem: () => {},
  onDeleteItem: () => {},
};

const CartItem = () => {
  return (
    <View style={styles.productCard}>
      <View style={styles.cartItemActionsContainer}>
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={tempItem.onAddItem}
        >
          <Ionicons
            name="add-circle-outline"
            size={30}
            color={AppColors.accentGray}
          />
        </TouchableOpacity>
        <AppText style={styles.itemCounter}>1</AppText>
        <TouchableOpacity
          style={styles.reduceItemButton}
          onPress={tempItem.onReduceItem}
        >
          <Ionicons
            name="remove-circle-outline"
            size={30}
            color={AppColors.accentGray}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.prodInfoContainer}>
        <View>
          <AppText style={styles.productName}>{tempItem.title}</AppText>
        </View>
        <View style={styles.priceAndDeleteGroup}>
          <AppText style={styles.price}>R{tempItem.price}</AppText>
          <TouchableOpacity>
            <View style={styles.deleteCartItemSection}>
              <AppText style={styles.deleteCaption}>Delete</AppText>
              <Ionicons name="trash" size={25} color={AppColors.accentGray} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.productImage}
          source={{ uri: tempItem.imageURL }}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  productCard: {
    flexDirection: "row",
    width: "95%",
    height: vs(130),
    backgroundColor: AppColors.surface,
    borderRadius: s(5),
    margin: s(10),
    alignItems: "center",
    padding: s(10),
    ...commonStyles.shadow,
  },
  cartItemActionsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: s(5),
    borderWidth: 1,
    borderColor: AppColors.secondaryText,
    height: vs(100),
    borderTopLeftRadius: s(25),
    borderTopRightRadius: s(25),
    borderBottomLeftRadius: s(25),
    borderBottomRightRadius: s(25),
  },
  prodInfoContainer: {
    height: vs(130),
    flex: 1,
    // borderWidth: 1,
    // borderColor: "white",
    justifyContent: "space-between",
  },
  productName: {
    marginTop: vs(10),
    marginStart: vs(20),
  },
  priceAndDeleteGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteCartItemSection: {
    flexDirection: "row",
  },
  deleteCaption: {
    color: AppColors.accentRed,
  },
  price: {
    marginBottom: vs(10),
    marginStart: vs(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.accentRed,
  },
  addItemButton: {
    height: vs(30),
    width: s(30),
    // marginLeft: s(10),
    // borderWidth: 1,
    // borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  itemCounter: {
    // height: vs(30),
    width: s(30),
    // marginLeft: s(10),
    // borderWidth: 1,
    // borderColor: "white",
    textAlign: "center",
  },
  reduceItemButton: {
    height: vs(30),
    width: s(30),
    // marginLeft: s(10),
    // borderWidth: 1,
    // borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(5),
    borderTopRightRadius: s(5),
    height: vs(100),
    width: s(100),
    // borderWidth: 1,
    // borderColor: "white",
  },
  productImage: {
    height: "100%",
    width: "100%",
    padding: 10,
    transform: [{ scaleY: 1.1 }, { translateY: 0 }],
  },
});
