import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: posts,
  initialState: { posts: [] },

  reducers: {
    addPost(state, action) {
      state.posts.push({ id: id, text: text });
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
