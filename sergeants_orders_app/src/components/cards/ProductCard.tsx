import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'

const ProductCard = () => {
  return (
    <View style={styles.cardsContainer}>
        <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={{uri:"https://github.com/otsilemodiselle/sergeants-order-mobile/blob/20f59553c064c2b0dd5aeaa552eec260d9b53433/sergeants_orders_app/assets/1370.png?raw=true"}}/>
            </View>
        </View>
        <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
            <Image style={styles.productImage} source={{uri:"https://github.com/otsilemodiselle/sergeants-order-mobile/blob/20f59553c064c2b0dd5aeaa552eec260d9b53433/sergeants_orders_app/assets/1365.png?raw=true"}}/>
            </View>
        </View>
        
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    cardsContainer:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    productContainer:{
        width: s(150),
        height: vs(190),
        backgroundColor: AppColors.surface,
        borderRadius:s(5),
        margin: s(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    imageContainer:{
        overflow:"hidden",
        borderTopLeftRadius: s(5),
        borderTopRightRadius: s(5),
        height: vs(130),
        width: "100%"
    },
    productImage:{
        height:"100%",
        width:"100%",
        transform:[
            {scaleY:1.1},
            {translateY:0}
        ]
    }
})