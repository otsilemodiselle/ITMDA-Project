import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import AppText from "../texts/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import RadioWithTitle from "../inputs/RadioWithTitle";
import { useTranslation } from "react-i18next";
import i18n from "../../localization/i18n";
import { languagesArr } from "../../localization/languagesList";
import { lang } from "moment";

const LanguageBottomSheet = () => {
  const [selectedLang, setSelectedLang] = useState(i18n.language)
  const onLanguagePress = (code: string) => {
    setSelectedLang(code)
  }
  const handleConfirm = () => {
    SheetManager.hide("LANG_SHEET")
    i18n.changeLanguage(selectedLang)
  }
  const { t } = useTranslation();
  return (
    <ActionSheet id="LANG_SHEET">
      <View style={styles.container}>
        <AppText style={styles.header}>{t("languages_header")}</AppText>
        {
          languagesArr.map((lang) =>(
            <RadioWithTitle key={lang.code} title={lang.label} selected={selectedLang === lang.code} onPress={()=>onLanguagePress(lang.code)}/>
          ))
        }
        <AppButton title={t("language_confirmButton")} onPress={handleConfirm} />
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
