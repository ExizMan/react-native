import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { Navigation } from "./screens/Navigation";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaView backgroundColor="#494d5f">
          <StatusBar barStyle="light-content" />
        </SafeAreaView>
        <Navigation />
      </Provider>
    </View>
  );
}
