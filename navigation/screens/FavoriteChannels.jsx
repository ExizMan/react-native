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

import { Channel } from "../../components/channel/Channel";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchChannels,
  addToFavorite,
  deleteFromFavorite,
} from "../../store/channelSlice";
import { FavoriteChannel } from "../../components/channel/FavoriteChannel";

const url =
  "https://newsapi.org/v2/top-headlines/sources?apiKey=677c9719571a45b9b1a86ed3bced6ab7";

export const FavoriteChannelsScreen = ({ navigation }) => {
  const { status, channels, favorite, err } = useSelector(
    (state) => state.root.channels
  );
  const ref = useRef(null);

  if (favorite) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={favorite}
          keyExtractor={(item) => item.id}
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
              <FavoriteChannel item={item} color="whitesmoke" />
              // </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};
