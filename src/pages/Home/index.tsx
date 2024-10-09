import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Header } from "../../components";
import { colors } from "../../constants";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text>Home</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_quartiary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background_quartiary,
  },
});
