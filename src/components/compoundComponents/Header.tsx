import React from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

import { colors, screen } from "../../constants";

const HEADER_IMAGE_SIZE = screen.width * 0.15;

export function Header() {
  return (
    <View style={styles.container}>
      <FastImage
        style={{ width: HEADER_IMAGE_SIZE, height: HEADER_IMAGE_SIZE }}
        source={require("../../assets/img/arctouch_logo.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: screen.statusBarHeight + 8,
    backgroundColor: colors.background_primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.input,
  },
});
