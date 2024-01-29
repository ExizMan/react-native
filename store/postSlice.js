import {
  createSlice,
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axios from "axios";

export const fetchNews = createAsyncThunk(
  "posts/fetchNews",

  async function (url, { rejectWithValue }) {
    console.log("correct");
    try {
      const resp = await axios.get(url);
      return resp.data.articles;
    } catch (err) {
      console.log(err);
      Alert.alert("Ошибка", "Не удалось получить статьи");
      return rejectWithValue(JSON.stringify(err));
    }
  }
);
//const fetchNews = createAction('posts/fetchNews')
const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], status: null, err: null },

  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "resolved";
        state.posts = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});
// createReducer(initialState, (builder) => {
//   builder.addCase(fetchNews.fulfilled, (state, action) => {
//     state.status = "resolved";
//     state.posts.push(action.payload);
//   });
// });

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
