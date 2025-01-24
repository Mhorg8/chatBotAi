import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
  sidebarState: boolean;
  isLogin: boolean;
  currentUserId: string;
}

const initialState: States = {
  sidebarState: false,
  isLogin: false,
  currentUserId: "",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarState = !state.sidebarState;
    },
    toggleLoginUser: (state, action: PayloadAction<string>) => {
      state.isLogin = !state.isLogin;
      state.currentUserId = action.payload;
    },
  },
});

export const { toggleSidebar, toggleLoginUser } = themeSlice.actions;
export default themeSlice.reducer;
