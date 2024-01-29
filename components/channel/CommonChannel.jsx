import { Channel } from "./Channel";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addToFavorite, deleteFromFavorite } from "../../store/channelSlice";
import { useRef } from "react";

const ChannelIcon = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
  background: ${({ isFavorite }) => (isFavorite ? "whitesmoke" : "#7FFFD4")};
`;

export const rightSwipe = (isFavorite) => {
  return (
    <ChannelIcon isFavorite={isFavorite}>
      <Ionicons
        name={isFavorite ? "trash" : "star"}
        size={24}
        color={isFavorite ? "red" : "gold"}
      />
    </ChannelIcon>
  );
};

export const CommonChannel = ({ item, isFavorite }) => {
  const refSwipe = useRef(null);
  dispatch = useDispatch();

  const handleSwipe = (item) => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(item));
      refSwipe.current?.close();
      console.log("sad", item, isFavorite);
    } else {
      dispatch(addToFavorite(item));
      refSwipe.current.close();
    }
  };

  return (
    <Swipeable
      ref={refSwipe}
      renderRightActions={(progress, dragX) => rightSwipe(isFavorite)}
      onSwipeableOpen={() => {
        handleSwipe(item);
      }}
    >
      <Channel item={item} isFavorite={isFavorite} />
    </Swipeable>
  );
};

// const styles = StyleSheet.create(
//   {
//     ImgContainer:{marginRight:}
//   }
// )
