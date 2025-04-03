import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../Views/AppSafeView'
import HomeHeader from '../headers/homeHeader'
import AppTextInput from '../inputs/AppTextInput'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { vs } from 'react-native-size-matters'
import AppButton from '../buttons/AppButton'
import { IS_Android } from '../../constants/constants'
import { useForm } from 'react-hook-form'
import AppTextInputController from '../inputs/AppTextInputController'

const CheckoutScreen = () => {

  const {control, handleSubmit} = useForm({})

  const saveOrder = (formData) => {
    console.log(formData)
  }

  return (
    <AppSafeView>
      <HomeHeader/>
      <View style={styles.checkoutContainer}>
        <View style={styles.container}>
          <AppTextInputController control={control} name={"phoneNumber"} placeholder='Phone Number'/>
          <AppTextInputController control={control} name={"cardName"} placeholder='Name on Card'/>
          <AppTextInputController control={control} name={"cardNumber"} placeholder='Card Number'/>
          <AppTextInputController control={control} name={"cardExpiry"} placeholder='Expiry Date MMYYYY'/>
          <AppTextInputController control={control} name={"cardCVV"} placeholder='CVV'/>
        </View>
        <View style={styles.payButtonContainer}>
          <AppButton title='Pay' onPress={handleSubmit(saveOrder)}/>
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