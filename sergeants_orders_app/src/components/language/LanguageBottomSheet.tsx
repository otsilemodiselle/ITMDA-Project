import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actions-sheet'
import AppText from '../texts/AppText'
import AppButton from '../buttons/AppButton'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import RadioWithTitle from '../inputs/RadioWithTitle'

const LanguageBottomSheet = () => {
  return (
    <ActionSheet id="LANG_SHEET">
        <View style={styles.container}>
            <AppText style={styles.header}>Change Language</AppText>
            <RadioWithTitle title="English" selected={true}/>
            <RadioWithTitle title="Afrikaans" selected={false}/>
            <RadioWithTitle title="Setswana" selected={false}/>
            <RadioWithTitle title="isiZulu" selected={false}/>
            <AppButton
                title='Confirm'
            />
        </View>
    </ActionSheet>
  )
}

export default LanguageBottomSheet

const styles = StyleSheet.create({
    container:{
        padding: s(16),
        backgroundColor: AppColors.surface
    },
    header:{
        marginBottom: vs(16),
        textAlign: "center"
    }
})