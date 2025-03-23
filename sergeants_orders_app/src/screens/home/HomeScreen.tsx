import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/homeHeader'
import { AppColors } from '../../styles/colors'

const HomeScreen = () => {
  return (
    <AppSafeView>
        <HomeHeader/>
        <Text style={{fontSize:60, color:AppColors.mainText}}>Homescreen</Text>
        <Text style={{fontSize:60, color:AppColors.mainText, fontFamily:"Roboto-Bold" }}>Homescreen</Text>
        <Text style={{fontSize:60, color:AppColors.mainText, fontFamily:"Roboto-Medium" }}>Homescreen</Text>
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})