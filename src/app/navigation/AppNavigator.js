import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import MainScreen from "../screens/MainScreen/MainScreen";
import ThemeScreen from "../screens/ThemeScreen/ThemeScreen";
import ActivityIndicatorScreen from "../screens/ActivityIndicatorScreen/ActivityIndicatorScreen";
import AppBarScreen from "../screens/AppBarScreen/AppBarScreen";
import AvatarScreen from "../screens/AvatarScreen/AvatarScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="MainScreen"
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
        <Stack.Screen
          name="ActivityIndicatorScreen"
          component={ActivityIndicatorScreen}
        />
        <Stack.Screen name="AppBarScreen" component={AppBarScreen} />
        <Stack.Screen name="AvatarScreen" component={AvatarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
