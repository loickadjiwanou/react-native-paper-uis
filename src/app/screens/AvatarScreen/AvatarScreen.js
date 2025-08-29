import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createAvatarScreenStyle } from "./AvatarScreen.style.js";
import { ThemeContext } from "../../contexts/ThemeContext";

const AvatarScreen = (props) => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const AvatarScreenStyle = createAvatarScreenStyle(theme);

  return (
    <View style={AvatarScreenStyle.view}>
      <Text>AvatarScreen</Text>
    </View>
  );
};
export default AvatarScreen;
