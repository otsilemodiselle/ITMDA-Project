import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/homeHeader'

const HomeScreen = () => {
  return (
    <AppSafeView>
        <HomeHeader/>
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})