import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axios from "axios";

export const fetchChannels = createAsyncThunk(
  "channels/fetchChannels",

  async function (url, { rejectWithValue }) {
    try {
      const resp = await axios.get(url);
      if (resp.data.status != "ok")
        throw new Error(
          "status not ok",
          "status not ok, probably status code is 40X"
        );
      return resp.data.sources;
    } catch (err) {
      console.log(err);
      Alert.alert("Ошибка", "Не удалось загрузить каналы");
      return rejectWithValue(JSON.stringify(err));
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
      state.favorite = state.favorite.filter(
        (favorite) => favorite.id !== action.payload.id
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
