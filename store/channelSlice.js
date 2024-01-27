import {
  createSlice,
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axios from "axios";

export const fetchChannels = createAsyncThunk(
  "channels/fetchChannels",

  async function (url, { rejectWithValue }) {
    console.log("correct2");
    try {
      const resp = await axios.get(url);
      console.log(resp.data.sources);
      return resp.data.sources;
    } catch (err) {
      console.log(err);
      Alert.alert("Ошибка", "Не удалось загрузить каналы");
      return rejectWithValue(err);
    }
  }
);

const channelSlice = createSlice({
  name: "channels",
  initialState: { channels: [], favorite: [], status: "", err: "" },
  reducers: {
    addToFavorite(state, action) {
      state.favorite.push(action.payload);
    },
    deleteFromFavorite(state, action) {
      state.favorite = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.pending, (state, action) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.status = "resolved";
        state.channels = action.payload;
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.status = "rejected";
        state.err = action.payload;
      });
  },
});

export const { addToFavorite, deleteFromFavorite } = channelSlice.actions;
export default channelSlice.reducer;
