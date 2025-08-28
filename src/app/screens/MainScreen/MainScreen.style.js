import { StyleSheet, StatusBar, Platform } from "react-native";

export const createMainScreenStyle = (theme) =>
  StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 55,
      paddingHorizontal: 10,
    },
    appicon: {
      width: 40,
      height: 40,
      // resizeMode: "contain",
    },
    themeButton: {
      width: 40,
      alignItems: "flex-end",
    },
    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 15,
      height: 40,
    },
    title: {
      fontSize: theme.fontSizes.mediumBig,
      fontFamily: theme.fonts.headlineMedium.fontFamily,
      textAlign: "center",
      color: theme.colors.text,
    },
    elementButton: {
      paddingVertical: 20,
      backgroundColor: theme.colors.muted,
      padding: 10,
      borderRadius: theme.bordersRoundnessPlus,
    },
    elementButtonText: {
      fontSize: theme.fontSizes.big,
      fontFamily: theme.fonts.headlineMedium.fontFamily,
      color: theme.colors.onBackground,
      textAlign: "center",
    },
  });
