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
import { useFetchNews } from "../hooks/getnews";
import { Post } from "../components/Post";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=677c9719571a45b9b1a86ed3bced6ab7";

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading, items, setItems] = useFetchNews(url);

  console.log(items);

  if (isLoading) {
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

  if (items != null) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.ind}
          renderItem={({ item }) => (
            <Post
              title={item.title}
              createdAt={item.publishedAt}
              imageUrl={item.urlToImage}
            />
          )}
        />
      </View>
    );
  }
};
