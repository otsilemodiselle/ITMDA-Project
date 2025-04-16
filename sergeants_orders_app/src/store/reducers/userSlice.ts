import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

interface UserState {
  userData: object | null;
  orderCounter: number;
  rank: string;
  discount: number;
}

const initialState: UserState = {
  userData: null,
  orderCounter: 0,
  rank: 'Cadet',
  discount: 0.05,
  medals: "🎖️",
};

const getRankAndDiscount = (orderCounter: number) => {
  const pos = orderCounter % 3;
  if (pos === 1) return { rank: 'Lieutenant', discount: 0.10, medals: '🎖️🎖️' };
  if (pos === 2) return { rank: 'Sergeant', discount: 0.15, medals: '🎖️🎖️🎖️' };
  return { rank: 'Cadet', discount: 0.05, medals: '🎖️' };
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Record<string, any>>) => {
      state.userData = action.payload;
      AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload));
    },
    setOrderCounter: (state, action: PayloadAction<number>) => {
      state.orderCounter = action.payload;
      const { rank, discount } = getRankAndDiscount(action.payload);
      state.rank = rank;
      state.discount = discount;
    },
    incrementOrderCounter: (state) => {
      state.orderCounter += 1;
      const { rank, discount } = getRankAndDiscount(state.orderCounter);
      state.rank = rank;
      state.discount = discount;

    },
  },
});

export const fetchOrderCounter = (uid: string) => async (dispatch: any) => {
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
