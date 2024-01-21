import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});
