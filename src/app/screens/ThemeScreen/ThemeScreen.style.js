import { StyleSheet, Platform, StatusBar } from "react-native";

export const createThemeScreenStyle = (theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 55,
      paddingHorizontal: 10,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
