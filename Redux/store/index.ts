import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "../slice/active-tab";

export const store: any = configureStore({
  reducer: {
    activeTab: activeTabReducer,
  },
});
