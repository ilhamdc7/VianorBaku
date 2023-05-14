import { createSlice } from "@reduxjs/toolkit";

const reklamSlice = createSlice({
    name:'reklam',
    initialState: {
        count: 0
    },reducers: {
        incrementReklam: (state,action) => {
            state.count++
        }
    }
})

export const reklamReduces = reklamSlice.reducer
export const {incrementReklam} = reklamSlice.actions