import { useEffect, useMemo } from "react";
import { Text, FlatList, View, ActivityIndicator } from "react-native";
import { CommonChannel } from "../../components/channel/CommonChannel";
import { RefreshControl } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannels } from "../../store/channelSlice";

const url =
  "https://newsapi.org/v2/top-headlines/sources?apiKey=677c9719571a45b9b1a86ed3bced6ab7";

export const ChannelsScreen = () => {
  const dispatch = useDispatch();
  const { status, favorite, channels } = useSelector(
    (state) => state.root.channels
  );

  const memoizedChannels = useMemo(() => channels, [channels]);
  const green = "rgba(152, 251, 152, 0.5)";

  useEffect(() => {
    dispatch(fetchChannels(url));
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
  } else if (memoizedChannels) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          refreshControl={
            <RefreshControl onRefresh={() => dispatch(fetchChannels(url))} />
          }
          data={memoizedChannels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            // if (!favorite.find((elem) => elem.id == item.id))
            return (
              <CommonChannel
                item={item}
                isFavorite={
                  favorite.find((elem) => elem.id == item.id) ? true : false
                }
              />
            );
          }}
        />
      </View>
    );
  }
};
