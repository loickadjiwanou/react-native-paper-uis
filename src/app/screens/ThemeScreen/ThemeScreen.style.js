import { StyleSheet } from "react-native";

export const createThemeScreenStyle = (theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
  });
