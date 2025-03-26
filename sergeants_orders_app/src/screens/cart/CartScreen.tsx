import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/homeHeader'
import AppSafeView from '../../components/Views/AppSafeView'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import TotalsView from '../../components/cart/TotalsView'

const CartScreen = () => {
  return (
    <AppSafeView>
        <HomeHeader/>
        {/* <EmptyCart/> */}
        <CartItem/>
        <TotalsView/>
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})