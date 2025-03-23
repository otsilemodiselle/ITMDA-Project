import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppSafeView from '../Views/AppSafeView'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { IMAGES } from '../../constants/images-paths'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMAGES.appLogo}/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.surface,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: vs(20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    image:{
        height: vs(80),
        width: s(85)    
    }
})