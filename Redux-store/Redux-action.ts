import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Redux-store";

// Define a type for the slice state

export interface actionState {
  Signup: boolean;
  Image_src: {
    data: string;
    isMobile: boolean;
  };
  opctionchoose: string;
  SearchQuery: string;
  StarMode: string;
  StarColur: string;
  MobileMenu: boolean;
}

// Define the initial state using that type
const initialState: actionState = {
  Signup: false,
  Image_src: {
    data: "",
    isMobile: false,
  },
  opctionchoose: "All",
  SearchQuery: "",
  StarMode: "",
  StarColur: "",
  MobileMenu: false,
};

export const actionSlice = createSlice({
  name: "action",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set_Signup: (state: actionState, action) => {
      state.Signup = action.payload;
    },
    set_Image_src: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.Image_src = action.payload;
    },
    setopctionchoose: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.opctionchoose = action.payload;
    },
    setSearchQuery: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.SearchQuery = action.payload;
    },
    setStarMode: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.StarMode = action.payload;
    },
    setStarColur: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.StarColur = action.payload;
    },
    setMobileMenu: (
      state: actionState,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.MobileMenu = action.payload;
    },
  },
});

export const {
  set_Signup,
  set_Image_src,
  setopctionchoose,
  setSearchQuery,
  setStarMode,
  setStarColur,
  setMobileMenu,
} = actionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const Signup_data = (state: RootState) => state.action.Signup;
export const Image_src_data = (state: RootState) => state.action.Image_src;
export const SearchQuery_data = (state: RootState) => state.action.SearchQuery;
export const StarMode_data = (state: RootState) => state.action.StarMode;
export const StarColur_data = (state: RootState) => state.action.StarColur;
export const MobileMenu_data = (state: RootState) => state.action.MobileMenu;
export const opctionchoose_data = (state: RootState) =>
  state.action.opctionchoose;

export default actionSlice.reducer;
