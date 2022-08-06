import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem",
    userId: 2,
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId: parseInt(userId),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
