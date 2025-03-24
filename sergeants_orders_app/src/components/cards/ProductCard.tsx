import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import AppText from '../texts/AppText'
import { Ionicons } from "@expo/vector-icons"
import { AppFonts } from '../../styles/fonts'

const ProductCard = () => {
  return (
    <View style={styles.cardsContainer}>
        <View style={styles.productCard}>
            <View style={styles.buyIconContainer}>
            <Ionicons name="cart" size={30} color={AppColors.accentGray} />
            </View>
            <View style={styles.prodInfoContainer}>
                <AppText style={styles.productName}>Full Rotisserie</AppText>
                <AppText style={styles.price}>R189.00</AppText>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={require("../../assets/images/rotisserie.png")}/>
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
        marginStart:vs(20),
        fontFamily: AppFonts.Bold
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