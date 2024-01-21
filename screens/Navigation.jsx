//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./FullPost";
import { HomeScreen } from "./Home";
//import HelloWorld from "./HelloWorld";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const homeName = "Новости";

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
            headerStyle: {
              /*height: 50,*/
              backgroundColor: "#494d5f",
            },
            headerTintColor: "white",

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
          <Tab.Screen name={homeName} component={HomeScreen} />
          {/*<Tab.Screen name="hello" component={HelloWorld} />*/}
        </Tab.Navigator>
      </NavigationContainer>
    </Header>
  );
};
