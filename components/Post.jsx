import styled from "styled-components/native";
import { Dimensions, Image } from "react-native";
const width = Dimensions.get("window").width;
console.log(width + "Q!!!");
import { StyleSheet } from "react-native";

const PostView = styled.View`
  flex: 1 0 0;

  flex-direction: column;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  flex: 1;
  width: 100%;
  height: ${width / 2}px;
  border-radius: 12px;
  margin-right: 12px;
  background-color: lightgray;
  margin: 8px 0;
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

const PostDate = styled.Text`
  flex: 1 0 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

// date-fns => format

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostDetails>
        <PostTitle>{title}</PostTitle>

        <PostImage source={{ uri: imageUrl }} />

        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostView>
  );
};

// const styles = StyleSheet.create(
//   {
//     ImgContainer:{marginRight:}
//   }
// )
