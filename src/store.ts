import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./lib/redux/theme/themeSlice.ts";
import searchSlice from "./lib/redux/search/serchSlice.ts";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
