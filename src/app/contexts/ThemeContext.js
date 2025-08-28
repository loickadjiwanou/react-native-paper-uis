import React, { createContext, useState, useMemo } from "react";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import colors from "../../assets/colors/colors";
import fonts from "../../assets/fonts/fonts";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = useMemo(() => {
    const baseTheme = isDark ? MD3DarkTheme : MD3LightTheme;

    return {
      ...baseTheme,
      bordersRoundness: 10,
      bordersRoundnessPlus: 20,
      spacing: 12,

      colors: {
        ...baseTheme.colors,
        primary: colors.primary,
        whiteBlack: isDark ? colors.black : colors.white,
        blackWhite: isDark ? colors.white : colors.black,
        blue: isDark ? colors.green : colors.blue,
        green: isDark ? colors.blue : colors.green,
        background: isDark ? colors.backgroundDark : colors.background,
        surface: isDark ? colors.surfaceDark : colors.surface,
        text: isDark ? colors.textDark : colors.text,
        onBackground: isDark ? colors.textDark : colors.text,
        placeholder: isDark ? colors.placeholderDark : colors.placeholder,
        error: isDark ? colors.errorDark : colors.error,
        accent: isDark ? colors.violet : colors.lavender,
        highlight: isDark ? colors.gold : colors.palegoldenrod,
        muted: isDark ? colors.dimgray : colors.gainsboro,
        mainText: isDark ? colors.mintcream : colors.slateblue,
        subText: isDark ? colors.pink : colors.lightpink,
        border: isDark ? colors.steelblue : colors.powderblue,
        hover: isDark ? colors.crimson : colors.tomato,
        success: colors.success,
        warning: colors.warning,
        info: colors.info,
        disabled: colors.disabled,
        colorPannel: { ...colors },
      },

      fonts: {
        displayLarge: {
          fontFamily: fonts.fontFamily.regular,
          fontSize: fonts.fontSizes.xxxBig,
        },
        displayMedium: {
          fontFamily: fonts.fontFamily.regular,
          fontSize: fonts.fontSizes.xxBig,
        },
        displaySmall: {
          fontFamily: fonts.fontFamily.regular,
          fontSize: fonts.fontSizes.xBig,
        },
        headlineLarge: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.mediumBig,
        },
        headlineMedium: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.normalBig,
        },
        headlineSmall: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.big,
        },
        titleLarge: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.medium,
        },
        titleMedium: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.normal,
        },
        titleSmall: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.small,
        },
        labelLarge: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.extraSmall,
        },
        labelMedium: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.tiny,
        },
        labelSmall: {
          fontFamily: fonts.fontFamily.medium,
          fontSize: fonts.fontSizes.tiny,
        },
        bodyLarge: {
          fontFamily: fonts.fontFamily.regular,
          fontSize: fonts.fontSizes.medium,
        },
        bodyMedium: {
          fontFamily: fonts.fontFamily.regular,
          fontSize: fonts.fontSizes.normal,
        },
        bodySmall: {
          fontFamily: fonts.fontFamily.regular,
          fontSize: fonts.fontSizes.small,
        },
      },

      fontSizes: fonts.fontSizes,
    };
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
