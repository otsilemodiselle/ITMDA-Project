import { vs, s } from "react-native-size-matters";
import { AppColors } from "./colors";
import {StyleSheet} from "react-native"

export const sharedPaddingHorizontal = s(12);
export const sharedMarginBottomSmall = s(12);
export const sharedMarginBottomMedium = s(16);
export const commonStyles = StyleSheet.create({
  shadow: {
    // IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    //Android
    elevation: 4,
  },
});
