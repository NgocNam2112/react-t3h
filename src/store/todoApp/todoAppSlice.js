import { createSlice } from "@reduxjs/toolkit";
import { fetchListTodo } from "./todoAppActions";

const initialState = [
  {
    content: "An sang",
    isCompleted: false,
    isActive: true,
    id: "2",
  },
  {
    content: "An trua",
    isCompleted: false,
    isActive: true,
    id: "3",
  },
  {
    content: "An toi",
    isCompleted: false,
    isActive: true,
    id: "4",
  },
  {
    content: "Test todo",
    isCompleted: false,
    isActive: true,
    id: "5",
    isComplete: false,
  },
];

export const todoAppSlice = createSlice({
  name: "todoAppSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },

    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchListTodo.fulfilled, (state, action) => {
      return [...action.payload];
    });
  },
});

export const { addTodo, deleteTodo } = todoAppSlice.actions;
export const todoAppReducer = todoAppSlice.reducer;
