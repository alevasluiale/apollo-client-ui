import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/types";

type AutenticationState = {
  user: User | null;
};

const initialState: AutenticationState = {
  user: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;
