import {createSlice} from '@reduxjs/toolkit'

interface States {
    sidebarState: boolean
}

const initialState: States = {
    sidebarState: false,
}

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarState = !state.sidebarState
        },
    }
})

export const {toggleSidebar} = themeSlice.actions;
export default themeSlice.reducer