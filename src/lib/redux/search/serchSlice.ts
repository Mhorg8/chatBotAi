import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchItem {
  question: string;
  answer: string;
}

interface States {
  searchQuery: string;
  searchResult: string;
  currentQuery: string;
  searchHistory: SearchItem[];
  loading: boolean;
  showResults: boolean;
  currentUserId: string | null;
}

const initialState: States = {
  searchQuery: "",
  currentQuery: "",
  searchResult: "",
  searchHistory: [],
  loading: false,
  showResults: false,
  currentUserId: null,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    onSearch: (state, action: PayloadAction<string>) => {
      state.currentQuery = state.searchQuery;
      state.searchQuery = "";
      state.loading = true;
      if (action.payload) {
        const response = action.payload;
        const lineSepratedArray = response.split("***").join(" ");
        const responseArray = lineSepratedArray.split("**");

        const boldedResult = responseArray
          .map((part, index) =>
            index % 2 === 1 ? `<strong>${part}</strong>` : part
          )
          .join("");

        // Replace asterisks with line breaks
        state.searchResult = boldedResult.split("*").join("<br/>");
      }
      if (state.searchResult !== "") {
        state.loading = false;
      }
      state.showResults = true;

      // Update searchHistory correctly
      state.searchHistory.push({
        question: state.currentQuery,
        answer: state.searchResult,
      });
    },
    addNewChat: (state) => {
      state.searchQuery = "";
      state.currentQuery = "";
      state.loading = false;
      state.searchResult = "";
    },
    setNewUserId: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        return;
      } else {
        state.currentUserId = action.type;
      }
    },
  },
});

export const {
  setSearchQuery,
  onSearch,
  setLoading,
  addNewChat,
  setNewUserId,
} = searchSlice.actions;
export default searchSlice.reducer;
