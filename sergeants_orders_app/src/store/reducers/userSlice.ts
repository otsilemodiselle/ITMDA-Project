import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

interface UserState {
  userData: object | null;
  orderCounter: number;
}

const initialState: UserState = {
  userData: null,
  orderCounter: 0,
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
      AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload));
    },
    setOrderCounter: (state, action: PayloadAction<number>) => {
      state.orderCounter = action.payload;
    },
    incrementOrderCounter: (state) => {
      state.orderCounter += 1;
    },
  },
});

export const fetchOrderCounter = (uid) => async (dispatch) => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const orderCounter = userSnap.data().orderCounter || 0;
      dispatch(setOrderCounter(orderCounter));
    }
  } catch (error) {
    console.error("Error fetching orderCounter:", error);
  }
};

export const { setUserData, setOrderCounter, incrementOrderCounter } = userSlice.actions;
export default userSlice.reducer;
