import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import AppText from '../texts/AppText'
import { Ionicons } from "@expo/vector-icons"

const ProductCard = () => {
  return (
    <View style={styles.cardsContainer}>
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Full Rotisserie</AppText>
                <AppText style={styles.price}>R189.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/rotisserie.png")}/>
            </View>
        </View>
        
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Sergeant's Basket</AppText>
                <AppText style={styles.price}>R150.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/sergeants_basket.png")}/>
            </View>
        </View>

        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Pizza Roma</AppText>
                <AppText style={styles.price}>R160.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/roma.png")}/>
            </View>
        </View>    

        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Pizza Capri</AppText>
                <AppText style={styles.price}>R135.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/capri.png")}/>
            </View>
        </View>
        
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Pizza Bologna</AppText>
                <AppText style={styles.price}>R165.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/bologna.png")}/>
            </View>
        </View>    

        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Sergeant's Chicken Burger</AppText>
                <AppText style={styles.price}>R60.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/chicken_burger.png")}/>
            </View>
        </View>
        
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Sergeant's Chicken and Cheese Burger</AppText>
                <AppText style={styles.price}>R70.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/chicken_burger_with_cheese.png")}/>
            </View>
        </View>
        
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Sergeant's Chicken Burger</AppText>
                <AppText style={styles.price}>R60.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/chicken_burger.png")}/>
            </View>
        </View>
        
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={20} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Sergeant's Chicken Burger</AppText>
                <AppText style={styles.price}>R60.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/chicken_burger.png")}/>
            </View>
        </View>
        
        
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    cardsContainer:{
        flex:1,
        flexDirection: "column",
        // flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    productCard:{
        flexDirection: "row",
        width: "90%",
        height: vs(130),
        backgroundColor: AppColors.surface,
        borderRadius:s(5),
        margin: s(10),
        alignItems: "center",
        padding: s(10)
    },
    prodInfoContainer:{
        height: vs(130),
        flex:1,
        // borderWidth: 1,
        // borderColor: "white",
        justifyContent: "space-between"
    },
    productName:{
        marginTop:vs(10),
        marginStart:vs(20)
    },
    price:{
        marginBottom:vs(10),
        marginStart:vs(20)
    },
    buyIconContainer:{
        height: vs(130),
        width: s(30),
        // borderWidth: 1,
        // borderColor: "white",
        alignItems: "center",
        justifyContent: 'center',
    },
    imageContainer:{
        overflow:"hidden",
        borderTopLeftRadius: s(5),
        borderTopRightRadius: s(5),
        height: vs(100),
        width: s(100),
        // borderWidth: 1,
        // borderColor: "white",
    },
    productImage:{
        height:"100%",
        width:"100%",
        padding: 10,
        transform:[
            {scaleY:1.1},
            {translateY:0}
        ]
    }
})