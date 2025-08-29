import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { ThemeContext } from "../../contexts/ThemeContext";
import { createThemeScreenStyle } from "./ThemeScreen.style";
import Back from "../../components/Back/Back";

const ThemeScreen = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const ThemeScreenStyle = createThemeScreenStyle(theme);

  return (
    <View style={ThemeScreenStyle.view}>
      <Back title={"Theme"} />
      <View style={ThemeScreenStyle.container}>
        <Button
          // rippleColor={}
          // disabled={true}
          compact={false}
          mode="contained"
          // dark={isDark}
          // loading={true}
          icon={"theme-light-dark"}
          accessibilityLabel="Toggle Theme"
          accessibilityHint="Toggle Theme"
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          onLongPress={() => {}}
          onPress={toggleTheme}
          // contentStyle={{ padding: 5 }}
          labelStyle={{
            color: theme.colors.text,
            fontSize: theme.fontSizes.normal,
          }}
          testID="toggle-theme-button"
          accessible={true}
          background={theme.colors.primary}
          // maxFontSizeMultiplier={1.2}
          // touchableRef,
        >
          Toggle Theme
        </Button>
      </View>
    </View>
  );
};

export default ThemeScreen;
