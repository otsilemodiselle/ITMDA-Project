import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../Views/AppSafeView'
import HomeHeader from '../headers/homeHeader'
import AppTextInput from '../inputs/AppTextInput'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { vs } from 'react-native-size-matters'
import AppButton from '../buttons/AppButton'
import { IS_Android } from '../../constants/constants'

const CheckoutScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader/>
      <View style={styles.checkoutContainer}>
        <View style={styles.container}>
          <AppTextInput placeholder='Name on Card'/>
          <AppTextInput placeholder='Card Number'/>
          <AppTextInput placeholder='Expiry Date MMYYYY'/>
          <AppTextInput placeholder='CVV'/>
        </View>
        <View style={styles.payButtonContainer}>
          <AppButton title='Pay'></AppButton>
        </View>
      </View>
    </AppSafeView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  checkoutContainer:{
    flexDirection: "column",
    flex:1,
    justifyContent: "space-between",
  },
  container:{
    paddingHorizontal: sharedPaddingHorizontal,
    paddingTop: vs(20)
  },
  payButtonContainer:{
    paddingHorizontal: sharedPaddingHorizontal,
    paddingBottom: IS_Android ? vs(15) : 0,

  }
})