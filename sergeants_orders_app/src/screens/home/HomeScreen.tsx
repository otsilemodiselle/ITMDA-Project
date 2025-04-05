import { SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "../../components/Views/AppSafeView";
import HomeHeader from "../../components/headers/homeHeader";
import { AppColors } from "../../styles/colors";
import ProductCard from "../../components/cards/ProductCard";
import { FlatList } from "react-native-gesture-handler";
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import { showMessage } from "react-native-flash-message";
import { getProductsData } from "../../config/dataServices";

const HomeScreen = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const data = await getProductsData()
    console.log(data);
    setProducts(data)
  }
  useEffect(() => {
    fetchData()
  },[])

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
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
            onAddToCartPress={() => {
              dispatch(addItemToCart(item))
              showMessage({
                      type:"success",
                      message: "Item added!"
                    })
            }}
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
