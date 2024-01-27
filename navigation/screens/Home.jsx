import axios from "axios";
import React from "react";
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

import { Post } from "../../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../store/postSlice";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=677c9719571a45b9b1a86ed3bced6ab7";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts, status, err } = useSelector((state) => state.root.posts);

  React.useEffect(() => {
    console.log("work");
    dispatch(fetchNews(url));
  }, []);

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

  if (posts) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={posts}
          // keyExtractor={(item) => item.ind}
          renderItem={({ item }) => {
            if (item.title !== "[Removed]")
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("FullPost", {
                      title: item.title,
                      imageUrl: item.urlToImage,
                      content: item.content,
                    })
                  }
                >
                  <Post
                    title={item.title}
                    createdAt={item.publishedAt}
                    imageUrl={item.urlToImage}
                  />
                </TouchableOpacity>
              );
          }}
        />
      </View>
    );
  }
};