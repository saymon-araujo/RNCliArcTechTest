import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { colors } from "../constants";

export type AppBottomTabParamList = {
  Home: undefined;
};

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator<AppBottomTabParamList>();

  return (
    <Navigator initialRouteName={"Home"}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.main,
          tabBarInactiveTintColor: colors.default,
        }}
      />
    </Navigator>
  );
}
