import React, { useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/app/navigation/AppNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider, ThemeContext } from "./src/app/contexts/ThemeContext";

SplashScreen.preventAutoHideAsync();

function RootApp() {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
      <StatusBar style={isDark ? "light" : "dark"} translucent={true} />
    </PaperProvider>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    FredokaRegular: require("./src/assets/fonts/Fredoka-Regular.ttf"),
    FredokaMedium: require("./src/assets/fonts/Fredoka-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider>
        <RootApp />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
