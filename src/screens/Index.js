import { View, StyleSheet, StatusBar, Text, Platform } from "react-native";
import Home from "./tabs/Home";
import Alquileres from "./tabs/Alquileres";
import Ventas from "./tabs/Ventas";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Usuario from "./tabs/Usuario";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolut",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 0,
    background: "#fff",
  },
  tabBarStyle: {
    height: 60,
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 10,
  },
};

export default function Index() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "#D20103" : "black"}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Alquileres" component={Alquileres} />
      <Tab.Screen name="Ventas" component={Ventas} />
      <Tab.Screen
        name="Usuario"
        component={Usuario}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="user-alt"
                  size={24}
                  color={focused ? "#D20103" : "black"}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
