import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../pages/Auth/Login";

export type AuthStackParamList = {
  Login: undefined;
};

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
}
