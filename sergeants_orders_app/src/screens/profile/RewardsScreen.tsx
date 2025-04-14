import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/homeHeader'
import { s, scale } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import RewardCard from '../../components/cards/RewardCard'
import { getRewardsData } from '../../config/dataServices'
import { FlatList } from 'react-native-gesture-handler'

const RewardsScreen = () => {

  const [rewardsList, setRewardsList] = useState([])

  const fetchRewards = async() => {
    const response = await getRewardsData()
    setRewardsList(response)
  }

  useEffect(()=>{
    fetchRewards()
  }, [])

  return (
    <AppSafeView>
        <HomeHeader/>
        <FlatList style={styles.container} data={rewardsList} keyExtractor={(item) => item.id.toString()} renderItem={({item})=>{return(<RewardCard title={item.label} description={item.description}/>)}}/>
    </AppSafeView>
  )
}

export default RewardsScreen

const styles = StyleSheet.create({
  container:{
    paddingTop:s(10)
  }
})