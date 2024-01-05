import React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./Start";
import Home from "./src/components/HomeScreen/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
