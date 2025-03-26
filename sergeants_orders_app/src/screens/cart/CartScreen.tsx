import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/homeHeader'
import AppSafeView from '../../components/Views/AppSafeView'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'

const CartScreen = () => {
  return (
    <AppSafeView>
        <HomeHeader/>
        {/* <EmptyCart/> */}
        <CartItem/>
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})