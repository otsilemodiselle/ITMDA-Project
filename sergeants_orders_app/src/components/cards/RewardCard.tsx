import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { AppColors } from '../../styles/colors';
import { s } from 'react-native-size-matters';
import { useTranslation } from "react-i18next";
import AppText from '../texts/AppText';
import { commonStyles } from "../../styles/sharedStyles";

interface IRewardCard {
    title: string;
    description: string;
}

const RewardCard: FC<IRewardCard> = ({title, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.iconContainer}>
            <Entypo name="price-ribbon" size={58} color={AppColors.secondaryText} />
        </View>
        <View style={styles.rewardHeaderContainer}>
            <AppText style={styles.header}>{title}</AppText>
        </View>
      </View>
      <View style={styles.containerBottom}>
            <AppText>{description}</AppText>
      </View>
    </View>
  )
}

export default RewardCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        backgroundColor: AppColors.surface,
        padding: s(10),
        margin: s(10),
        borderRadius: s(5),
        width: "95%",
        ...commonStyles.shadow,
    },
    containerTop:{
        flexDirection:"row"
    },
    iconContainer:{
    },
    rewardHeaderContainer:{
        flex: 1
    },
    header:{
       fontSize:50 
    },
    containerMiddle:{
    },
    containerBottom:{
        padding:20
    },
})