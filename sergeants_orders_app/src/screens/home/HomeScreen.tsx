import { SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import { AppColors } from "../../styles/colors";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
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
            onAddToCartPress={() => {}}
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
    backgroundColor: AppColors.accentGray,
    width: "100%",
  },
  sectionTitle:{
    fontSize: s(16), 
    fontWeight: "bold", 
    marginLeft: s(10)
  }
});
