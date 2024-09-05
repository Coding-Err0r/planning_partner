import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "basic info",
};

export const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state: any, action) => {
      state.title = action.payload;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;

export default activeTabSlice.reducer;
