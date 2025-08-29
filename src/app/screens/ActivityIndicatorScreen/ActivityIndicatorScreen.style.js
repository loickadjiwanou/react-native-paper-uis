import { StyleSheet, Platform, StatusBar } from "react-native";

export const createActivityIndicatorScreenStyle = (theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 55,
      paddingHorizontal: 10,
    },
    content: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 50,
    },
    container: {
      height: 200,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: theme.fontSizes.medium,
      fontFamily: theme.fonts.headlineMedium.fontFamily,
      textAlign: "center",
      color: theme.colors.text,
    },
  });
