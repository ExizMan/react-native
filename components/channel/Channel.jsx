import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";
import { Alert, Text } from "react-native";
import { useDispatch } from "react-redux";
import { truncateString } from "../../hooks/utils";
import { addToFavorite } from "../../store/channelSlice";
import { useRef } from "react";

export const Channel = ({ item, color, ...props }) => {
  const ChannelView = styled.View`
    flex: 1 0 0;

    flex-direction: column;
    width: 100%;
    background: ${color};
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
  `;
  const ChannelTitle = styled.Text`
    flex: 1;
    font-size: 14px;
    font-weight: 400;
  `;
  const ChannelItem = styled.Text`
    flex: 1;
    font-size: 8px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  `;

  const ChannelPayload = styled.View`
    padding: 8px 0px 0px 12px;
    flex-direction: row;
  `;

  const ChannelDetail = styled.View`
    padding: 8px 0px 4px 12px;
    flex-direction: row;
    justify-content: space-between;
  `;

  const ChannelIcon = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
    background: green;
  `;

  return (
    <ChannelView>
      <ChannelPayload>
        <ChannelTitle>{truncateString(item.name, 25)}</ChannelTitle>
      </ChannelPayload>
      <ChannelDetail>
        <ChannelItem>{item.id}</ChannelItem>
        <ChannelItem>{item.category}</ChannelItem>
        <ChannelItem>{item.language}</ChannelItem>
      </ChannelDetail>
    </ChannelView>
  );
};

// const styles = StyleSheet.create(
//   {
//     ImgContainer:{marginRight:}
//   }
// )
