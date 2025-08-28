import React, { useContext } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { ThemeContext } from "../../contexts/ThemeContext";
import { createThemeScreenStyle } from "./ThemeScreen.style";

const ThemeScreen = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const ThemeScreenStyle = createThemeScreenStyle(theme);

  return (
    <View style={ThemeScreenStyle.view}>
      <Text style={{ color: theme.colors.onBackground }}>
        {isDark ? "Dark" : "Light"}
      </Text>
      <Button mode="contained" onPress={toggleTheme} style={{ marginTop: 16 }}>
        Toggle Theme
      </Button>
    </View>
  );
};

export default ThemeScreen;
