import { StyleSheet, Platform, StatusBar } from "react-native";

export const createAppBarScreenStyle = (theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 55,
      paddingHorizontal: 10,
    },
    title: {
      fontSize: theme.fontSizes.medium,
      fontFamily: theme.fonts.headlineMedium.fontFamily,
      textAlign: "center",
      color: theme.colors.text,
    },
    header: {
      position: "absolute",
      width: "100%",
      paddingHorizontal: -20,
      top: 0,
    },
    bottom: {
      backgroundColor: "aquamarine",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
    },
    fab: {
      position: "absolute",
      right: 16,
    },
  });
