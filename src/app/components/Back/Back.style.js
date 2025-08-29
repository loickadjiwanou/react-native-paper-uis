import { StyleSheet, StatusBar, Platform } from "react-native";

export const createBackStyle = (theme) =>
  StyleSheet.create({
    view: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    element: {
      width: 35,
      height: 35,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.colors.blackWhite,
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.75,
    },
    element2: {
      width: 35,
      height: 35,
      borderRadius: 10,
      borderWidth: 0,
      borderColor: theme.colors.blackWhite,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: theme.fontSizes.mediumBig,
      fontFamily: theme.fonts.headlineMedium.fontFamily,
      textAlign: "center",
      color: theme.colors.text,
    },
  });
