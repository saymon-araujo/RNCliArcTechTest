import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Routes } from "./src/routes";
import { AppProvider } from "./src/hooks";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent animated />
        <Routes />
      </AppProvider>
    </GestureHandlerRootView>
  );
}
