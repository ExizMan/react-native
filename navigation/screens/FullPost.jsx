import React from "react";
import axios from "axios";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../../components/Loading";
import { truncateString } from "../../hooks/utils";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  background-color: lightgray;
`;

const PostTitle = styled.Text`
  flex: 1;
  padding: 20px 0;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
`;

const PostText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const { title, imageUrl, content } = route.params;
  console.log(content);

  return (
    <ScrollView style={{ padding: 10 }}>
      <PostTitle>{title}</PostTitle>

      {imageUrl != undefined && <PostImage source={{ uri: imageUrl }} />}
      {content ? (
        <PostText>{truncateString(content, 197)}</PostText>
      ) : (
        <Text>Not found content data</Text>
      )}
    </ScrollView>
  );
};
