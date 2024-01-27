import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { truncateString } from "../hooks/utils";
import { addToFavorite } from "../store/channelSlice";
import { useRef } from "react";

const ChannelView = styled.View`
  flex: 1 0 0;

  flex-direction: row;
  background: whitesmoke;
`;

const ChannelTitle = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: 400;
`;

const ChannelDetails = styled.View`
  width: 100%;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const ChannelDate = styled.Text`
  flex: 1 0 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;
const ChannelIcon = styled.View`
  width: 100px;
  justify-content: center;
  align-items: center;
  background: green;
`;

export const Channel = ({ item, ...props }) => {
  const swipeableRef = useRef(null);

  dispatch = useDispatch();
  const handleSwipe = (item) => {
    swipeableRef.current.close();
    dispatch(addToFavorite(item));
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
      ref={swipeableRef}
      renderRightActions={rightSwipe}
      onSwipeableOpen={() => {
        handleSwipe(item);
      }}
    >
      <ChannelView>
        <ChannelDetails>
          <ChannelTitle>{truncateString(item.name, 25)}</ChannelTitle>
        </ChannelDetails>
      </ChannelView>
    </Swipeable>
  );
};

// const styles = StyleSheet.create(
//   {
//     ImgContainer:{marginRight:}
//   }
// )
