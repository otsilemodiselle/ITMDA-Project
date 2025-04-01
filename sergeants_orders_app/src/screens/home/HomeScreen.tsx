import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import { AppColors } from "../../styles/colors";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <AppSafeView style={styles.homeContainer}>
      <HomeHeader />
      <SectionList
        sections={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            title={item.title}
            price={item.price.toFixed(2)}
            onAddToCartPress={() => {dispatch(addItemToCart(item))}}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>
              {title}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingRight: s(20) }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    
  },
  sectionCard:{
    paddingVertical: s(10), 
    marginTop: vs(2),
    marginLeft: s(10),
    backgroundColor: AppColors.mainBackground,
    width: "100%",
  },
  sectionTitle:{
    fontSize: s(18), 
    fontWeight: "bold", 
    color: AppColors.mainText,
    marginLeft: s(10)
  }
});
