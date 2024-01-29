import React from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { CommonChannel } from "../../components/channel/CommonChannel";

export const FavoriteChannelsScreen = () => {
  const { favorite } = useSelector((state) => state.root.channels);

  if (favorite) {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={favorite}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <CommonChannel item={item} isFavorite={true} />;
          }}
        />
      </View>
    );
  }
};
