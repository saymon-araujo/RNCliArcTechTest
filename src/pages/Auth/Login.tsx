import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../routes/auth.routes";

type NavigationProps = NativeStackScreenProps<AuthStackParamList, "Login">;

export function Login({ route, navigation }: NavigationProps) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
