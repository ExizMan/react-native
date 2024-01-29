import styled from "styled-components/native";
import { Dimensions } from "react-native";
const width = Dimensions.get("window").width;

const PostView = styled.View`
  flex: 1 0 0;
  flex-direction: column;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: ${width / 2}px;
  border-radius: 12px;
  background-color: lightgray;
  margin: 8px 0;
  position: relative;
`;

const PostTitle = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: 600;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDescription = styled.Text`
  position: absolute;
  padding: 5px;
  bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: white;
  text-shadow: -1px 1px 1px black;
`;
const PostUtils = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin-top: 2px;
`;
const PostUtilItem = styled.Text`
  flex: 1;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Post = ({ title, description, imageUrl, createdAt, postId }) => {
  return (
    <PostView>
      <PostDetails>
        <PostTitle>{title}</PostTitle>

        <PostImage source={{ uri: imageUrl }} imageStyle={{ borderRadius: 12 }}>
          <PostDescription numberOfLines={2}>{description}</PostDescription>
        </PostImage>
        <PostUtils>
          <PostUtilItem>
            {new Date(createdAt).toLocaleDateString()}
          </PostUtilItem>
          <PostUtilItem>{postId}</PostUtilItem>
        </PostUtils>
      </PostDetails>
    </PostView>
  );
};
