import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/homeHeader'
import OrderCard from '../../components/cards/OrderCard'
import { FlatList } from 'react-native-gesture-handler'
import { s, vs } from 'react-native-size-matters'
import { orders } from '../../data/orders'
import { fetchUserOrders } from '../../config/dataServices'
import { getDateFromFireStoreTimeStampObject } from '../../components/headers/dateTimeHelper'

const MyOrders = () => {

    const [ordersList, setOrdersList] = useState([])

    const getOrders = async() => {
        const response = await fetchUserOrders()
        setOrdersList(response)
    }

    useEffect(() => {
        getOrders()
    }, [])

  return (
    <AppSafeView>
        <HomeHeader/>
        <FlatList style={styles.ordersContainer}
            data={ordersList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
                return (<OrderCard 
                    cost={item.totalProductsPriceSum}
                    date={getDateFromFireStoreTimeStampObject(item.createdAt)}
                />)
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