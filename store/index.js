import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import postReducer from "./postSlice";
import channelReducer from "./channelSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  posts: postReducer,
  channels: channelReducer,
});

export default configureStore({
  reducer: {
    root: rootReducer,
  },
});
