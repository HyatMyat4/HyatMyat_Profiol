import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Redux-store";

// Define a type for the slice state

export interface actionState {
  darkmode: boolean;
}

// Define the initial state using that type
const initialState: actionState = {
  darkmode: true,
};

export const actionSlice = createSlice({
  name: "action",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set_darkMode: (state, action) => {
      state.darkmode = action.payload;
    },
  },
});

export const { set_darkMode } = actionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const darkMode_data = (state: RootState) => state.action.darkmode;

export default actionSlice.reducer;
