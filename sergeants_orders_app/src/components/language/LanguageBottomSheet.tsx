import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { useTranslation } from "react-i18next";

const LanguageBottomSheet = () => {
  const { t } = useTranslation();
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.header}>{t("languages_header")}</AppText>
        <RadioWithTitle title="English" selected={true} />
        <RadioWithTitle title="Afrikaans" selected={false} />
        <RadioWithTitle title="Setswana" selected={false} />
        <RadioWithTitle title="isiZulu" selected={false} />
        <AppButton title={t("language_confirmButton")} />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
    backgroundColor: AppColors.surface,
  },
  header: {
    marginBottom: vs(16),
    textAlign: "center",
  },
});
