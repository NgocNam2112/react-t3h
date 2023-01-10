import { configureStore } from "@reduxjs/toolkit";
import { todoAppReducer } from "./todoApp/todoAppSlice";

const store = configureStore({
  reducer: {
    todoApp: todoAppReducer,
  },
});

export default store;
