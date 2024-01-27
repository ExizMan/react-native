import axios from "axios";
import React from "react";
import { useRef } from "react";
import {
  Alert,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Channel } from "../../components/Channel";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchChannels,
  addToFavorite,
  deleteFromFavorite,
} from "../../store/channelSlice";

const url =
  "https://newsapi.org/v2/top-headlines/sources?apiKey=677c9719571a45b9b1a86ed3bced6ab7";

export const FavoriteChannelsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { status, channels, favorite, err } = useSelector(
    (state) => state.root.channels
  );
  const ref = useRef(null);

  if (status === "loading") {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }

  if (favorite) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={favorite}
          // keyExtractor={(item) => item.ind}
          renderItem={({ item }) => {
            return (
              // <TouchableOpacity
              //   onPress={() =>
              //     navigation.navigate("FullPost", {
              //       title: item.title,
              //       imageUrl: item.urlToImage,
              //       content: item.content,
              //     })
              //   }
              // >
              <Channel item={item} />
              // </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};
