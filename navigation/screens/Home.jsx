import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import { Post } from "../../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../store/postSlice";

const re =
  /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/;

const produceDomains = (arr) => {
  let domains = [];
  arr.map((item) => domains.push(item.url.match(re, "", "", "", "")[1]));
  return `https://newsapi.org/v2/everything?apiKey=677c9719571a45b9b1a86ed3bced6ab7&domains=${domains.join()}`;
};

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.root.posts);
  const { favorite } = useSelector((state) => state.root.channels);
  const [searchText, setSearchText] = useState("");
  const url = produceDomains(favorite);
  console.log(url);
  useEffect(() => {
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

  if (status === "resolved" || posts) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          refreshControl={
            <RefreshControl onRefresh={() => dispatch(fetchNews(url))} />
          }
          ListHeaderComponent={
            <TextInput
              style={styles.input}
              onChangeText={setSearchText}
              value={searchText}
              placeholder="Search"
            />
          }
          ListHeaderComponentStyle={styles.inputConteiner}
          data={posts}
          renderItem={({ item }) => {
            if (item.title !== "[Removed]") {
              if (searchText === "")
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Article", {
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
                      description={item.description}
                      postId={item.source.id}
                    />
                  </TouchableOpacity>
                );

              if (
                item.title
                  .toUpperCase()
                  .includes(searchText.toUpperCase().trim().replace(/\s/g, ""))
              )
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Article", {
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
                      description={item.description}
                      postId={item.source.id}
                    />
                  </TouchableOpacity>
                );
            }
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    width: 100,
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  inputConteiner: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
