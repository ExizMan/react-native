import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { Navigation } from "./navigation/Navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store";
import "react-native-gesture-handler";
export default function App() {
  let persistor = persistStore(store);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView backgroundColor="#494d5f">
            <StatusBar barStyle="light-content" />
          </SafeAreaView>
          <Navigation />
        </PersistGate>
      </Provider>
    </View>
  );
}
