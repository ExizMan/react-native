import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { Navigation } from "./screens/Navigation";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView backgroundColor="#494d5f">
        <StatusBar barStyle="light-content" />
      </SafeAreaView>
      <Navigation />
    </View>
  );
}
