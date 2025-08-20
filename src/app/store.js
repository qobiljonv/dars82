import { configureStore } from "@reduxjs/toolkit";
import desertsReducer from "./featurest/desertsSlise";

export const store = configureStore({
  reducer: {
    deserts: desertsReducer,
  },
});
