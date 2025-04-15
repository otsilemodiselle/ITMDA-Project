import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import { AppColors } from "../../styles/colors";
import ProductCard from "../../components/cards/ProductCard";
import { s, vs } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import { showMessage } from "react-native-flash-message";
import { getProductsData } from "../../config/dataServices";
import { RootState } from "../../store/store";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const discount = useSelector((state: RootState) => state.userSlice.discount);

  const fetchData = async () => {
    const data = await getProductsData();
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function groupProductsByCategory(products) {
    const grouped = products.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});

    return Object.entries(grouped).map(([title, data]) => ({ title, data }));
  }

  return (
    <AppSafeView style={styles.homeContainer}>
      <HomeHeader />
      <SectionList
        sections={groupProductsByCategory(products)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const discountedItem = {
            ...item,
            price: Number((item.price * (1 - discount)).toFixed(2)), // apply discount
          };

          return (
            <ProductCard
              imageURL={item.imageURL}
              title={item.title}
              price={item.price} // still show full price here if you want
              onAddToCartPress={() => {
                dispatch(addItemToCart(discountedItem));
                showMessage({
                  type: "success",
                  message: "Item added!",
                });
              }}
            />
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingRight: s(20) }}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  sectionCard: {
    paddingVertical: s(10),
    marginTop: vs(2),
    marginLeft: s(10),
    backgroundColor: AppColors.mainBackground,
    width: "100%",
  },
  sectionTitle: {
    fontSize: s(18),
    fontWeight: "bold",
    color: AppColors.mainText,
    marginLeft: s(10),
  },
});
