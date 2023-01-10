import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListTodo = createAsyncThunk(
  "todoAppSlice/fetchListTodo",
  async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todoAppSlice/deleteTodo",
  async (url, id) => {
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      return data;
    } catch (error) {}
  }
);
