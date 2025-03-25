import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/homeHeader'
import AppSafeView from '../../components/Views/AppSafeView'
import EmptyCart from './EmptyCart'

const CartScreen = () => {
  return (
    <AppSafeView>
        <HomeHeader/>
        <EmptyCart/>
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})