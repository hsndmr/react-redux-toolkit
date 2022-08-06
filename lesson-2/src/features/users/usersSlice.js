import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "John Doe",
  },
  {
    id: 1,
    name: "Jane Doe 2",
  },
  {
    id: 2,
    name: "Jane Doe 3",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
