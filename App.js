import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { Navigation } from "./navigation/Navigation";
import { Provider } from "react-redux";
import store from "./store";
import "react-native-gesture-handler";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Provider store={store}>
        <SafeAreaView backgroundColor="#494d5f">
          <StatusBar barStyle="light-content" />
        </SafeAreaView>

        <Navigation />
      </Provider>
    </View>
  );
}
