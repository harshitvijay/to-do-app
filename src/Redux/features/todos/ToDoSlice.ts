import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type InitialState = {
  loading: boolean;
  todos: Todo[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  todos: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchTodos = createAsyncThunk("todo/fetchTodos", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
    .then((response: any) => response.data);
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTodos.fulfilled,
      (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default todoSlice.reducer;
