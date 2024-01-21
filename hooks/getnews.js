import React, { useEffect, useState } from "react";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const useFetchNews = (url) =>
  createAsyncThunk(
    "posts/fetchNews",
    //   const [isLoading, setIsLoading] = React.useState(true);
    //   const [items, setItems] = React.useState();
    function fetchPosts(url, { rejectWithValue }) {
      setIsLoading(true);
      axios
        .get(url)
        .then(({ data }) => {
          console.log(typeof data);
          data.articles.forEach((element, index) => {
            console.log(JSON.stringify(element) + JSON.stringify(index));
            element.ind = JSON.parse(index);
          });
          setItems(data.articles);

          // console.log(data);
          console.log("GOOD" + JSON.stringify(data.articles) + typeof data);
          return data.articles;
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Ошибка", "Не удалось получить статьи");
          rejectWithValue(err);
        });
    }
  );
