import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserAction(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUserAction(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUserAction, logoutUserAction } = authSlice.actions;
export default authSlice.reducer;
