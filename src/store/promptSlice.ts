import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface States {
  propmpts: string[];
  history: string[];
}

const initialState: States = {
  propmpts: [],
  history: [],
};

const promptSlice = createSlice({
  name: "popmpt",
  initialState,
  reducers: {
    ADD_NEW_PROMPT: (state, action: PayloadAction<string>) => {
      state.propmpts = [...state.propmpts, action.payload];
      localStorage.setItem("prompts", JSON.stringify(state.propmpts));
    },
  },
});

export const { ADD_NEW_PROMPT } = promptSlice.actions;
export default promptSlice.reducer;
