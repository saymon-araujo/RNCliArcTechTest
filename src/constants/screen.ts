import { Dimensions } from "react-native";
import { getTopInset, getBottomInset } from "rn-iphone-helper";

export const screen = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  statusBarHeight: getTopInset(),
  iphoneBottomInset: getBottomInset(),
};
