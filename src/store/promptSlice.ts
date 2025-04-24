import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
  propmpts: string[];
  history: string[];
  isMoblieMenuOpen: boolean;
}

const initialState: States = {
  propmpts: [],
  history: [],
  isMoblieMenuOpen: false,
};

const promptSlice = createSlice({
  name: "popmpt",
  initialState,
  reducers: {
    ADD_NEW_PROMPT: (state, action: PayloadAction<string>) => {
      state.propmpts = [...state.propmpts, action.payload];
      localStorage.setItem("prompts", JSON.stringify(state.propmpts));
    },
    TOOGLE_MOBILE_MENU: (state) => {
      state.isMoblieMenuOpen = !state.isMoblieMenuOpen;
    },
  },
});

export const { ADD_NEW_PROMPT, TOOGLE_MOBILE_MENU } = promptSlice.actions;
export default promptSlice.reducer;
