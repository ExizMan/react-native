import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetchNews = (url) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();
  const fetchPosts = () => {
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
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => fetchPosts(), []);
  return [isLoading, setIsLoading, items, setItems];
};
