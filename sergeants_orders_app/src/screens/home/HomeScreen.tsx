import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import { AppColors } from "../../styles/colors";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";
import { s } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        numColumns={1}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            title={item.title}
            price={item.price.toFixed(2)}
            onAddToCartPress={() => {}}
          />
        )}
        contentContainerStyle={{
          paddingRight: s(20),
        }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
