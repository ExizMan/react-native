import { Channel } from "./Channel";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";
import { Alert, Text } from "react-native";
import { useDispatch } from "react-redux";
import { truncateString } from "../../hooks/utils";
import { addToFavorite, deleteFromFavorite } from "../../store/channelSlice";
import { useRef } from "react";

export const FavoriteChannel = ({ item, color = "whitesmoke", ...props }) => {
  const ChannelIcon = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
    background: green;
  `;

  const swipeableRef = useRef(null);

  dispatch = useDispatch();
  const handleSwipe = (item) => {
    // swipeableRef.current.close();
    dispatch(deleteFromFavorite(item));
  };

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <ChannelIcon>
        <Ionicons name="star" size={24} color="gold" />
      </ChannelIcon>
    );
  };

  return (
    <Swipeable
      //   ref={swipeableRef}
      renderRightActions={rightSwipe}
      onSwipeableOpen={() => {
        handleSwipe(item);
      }}
    >
      <Channel item={item} color={color} />
    </Swipeable>
  );
};

// const styles = StyleSheet.create(
//   {
//     ImgContainer:{marginRight:}
//   }
// )
