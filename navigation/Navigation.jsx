import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./screens/FullPost";
import { HomeScreen } from "./screens/Home";
//import HelloWorld from "./HelloWorld";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";
import { ChannelsScreen } from "./screens/Channels";
import { FavoriteChannelsScreen } from "./screens/FavoriteChannels";

const Tab = createBottomTabNavigator();
const homeName = "Новости";
const Stack = createStackNavigator();

function Feed() {
  return <Text>Feed!</Text>;
}

function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        headerStyle: {
          /*height: 50,*/
          backgroundColor: "#494d5f",
        },
        headerTintColor: "white",
        headerRight: () => {
          return (
            // <TouchableOpacity >
            <Ionicons.Button
              name="list"
              backgroundColor="rgba(0,0,0,0)"
              size={25}
              color="white"
              onPress={() => navigation.navigate("News")}
            />
            // </TouchableOpacity>
          );
        },
      })}
    >
      <Stack.Screen name="Sources" component={TabNav} />

      <Stack.Screen name="News" component={HomeScreen} />

      <Stack.Screen name="Article" component={FullPostScreen} />
    </Stack.Navigator>
  );
}
function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Channels"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#3e90cf",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          padding: 10,
          height: 100,
          backgroundColor: "whitesmoke",
          borderTopWidth: 2,
        },

        tabBarLabelStyle: { paddingBottom: 10, fontSize: 12 },
        /*
        headerStyle: {
          height: 50,
          backgroundColor: "#494d5f",
        },
        headerTintColor: "white",
        */
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Channels") {
            iconName = focused ? "home" : "home-outline";
          } else {
            iconName = focused ? "star" : "star-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Channels" component={ChannelsScreen} />
      <Tab.Screen name="Favorite" component={FavoriteChannelsScreen} />

      {/* <Tab.Screen name={homeName} component={HomeScreen} /> */}
      {/* <Tab.Screen name="Stack" component={StackNav} /> */}
    </Tab.Navigator>
  );
}

const Header = styled.View`
  flex: 1;
  background-color: gold;
  color: green;
  justify-content: center;
`;

export const Navigation = () => {
  return (
    <Header>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Header>
  );
};
