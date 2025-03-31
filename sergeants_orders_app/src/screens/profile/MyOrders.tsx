import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/homeHeader'
import OrderCard from '../../components/cards/OrderCard'
import { FlatList } from 'react-native-gesture-handler'
import { s, vs } from 'react-native-size-matters'
import { orders } from '../../data/orders'

const MyOrders = () => {
  return (
    <AppSafeView>
        <HomeHeader/>
        <FlatList style={styles.ordersContainer}
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                return <OrderCard {...item}/>
            }}
        />
    </AppSafeView>
  )
}

export default MyOrders

const styles = StyleSheet.create({
    ordersContainer:{
        // paddingHorizontal: s(10),
        // marginTop: vs(10),
    },
})