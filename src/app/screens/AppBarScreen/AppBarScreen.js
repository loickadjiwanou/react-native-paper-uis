import React, { useContext } from "react";
import { View, Text, Alert, Platform } from "react-native";
import { createAppBarScreenStyle } from "./AppBarScreen.style.js";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Appbar, FAB } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Back from "../../components/Back/Back.js";

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const AppBarScreen = (props) => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const AppBarScreenStyle = createAppBarScreenStyle(theme);
  const { bottom } = useSafeAreaInsets();

  const TopBar = () => (
    <Appbar.Header style={AppBarScreenStyle.header}>
      <Text style={AppBarScreenStyle.title}>Title</Text>
      <Appbar.BackAction
        onPress={() => {
          Alert.alert("Back");
        }}
      />
      <Appbar.Content title="" />
      <Appbar.Action
        icon="calendar"
        onPress={() => {
          Alert.alert("Calendar");
        }}
      />
      <Appbar.Action
        icon="magnify"
        onPress={() => {
          Alert.alert("Search");
        }}
      />
    </Appbar.Header>
  );

  const BottomBar = () => (
    <Appbar
      style={[
        AppBarScreenStyle.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2,
          //   backgroundColor: theme.colors.border,
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action
        icon="archive"
        onPress={() => {
          Alert.alert("Archive");
        }}
      />
      <Appbar.Action
        icon="email"
        onPress={() => {
          Alert.alert("Email");
        }}
      />
      <Appbar.Action
        icon="label"
        onPress={() => {
          Alert.alert("Label");
        }}
      />
      <Appbar.Action
        icon="delete"
        onPress={() => {
          Alert.alert("Delete");
        }}
      />
      <FAB
        mode="elevated"
        size="medium"
        icon="plus"
        onPress={() => {
          Alert.alert("Add");
        }}
        style={[
          AppBarScreenStyle.fab,
          { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
        ]}
      />
    </Appbar>
  );

  return (
    <View style={AppBarScreenStyle.view}>
      <Back title={"App Bar"} />

      <TopBar />
      <BottomBar />
    </View>
  );
};
export default AppBarScreen;
