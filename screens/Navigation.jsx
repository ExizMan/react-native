import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./FullPost";
import { HomeScreen } from "./Home";
//import HelloWorld from "./HelloWorld";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text, Button } from "react-native";
import { TouchableHighlight } from "react-native";

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
            <Button
              onPress={() => navigation.navigate(homeName)}
              title="+"
              color="#fff"
            />
          );
        },
      })}
    >
      <Stack.Screen name="TabNav" component={TabNav} />

      <Stack.Screen name={homeName} component={HomeScreen} />

      <Stack.Screen name="FullPost" component={FullPostScreen} />
    </Stack.Navigator>
  );
}
function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
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
          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else {
            iconName = focused ? "list" : "list-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />

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
