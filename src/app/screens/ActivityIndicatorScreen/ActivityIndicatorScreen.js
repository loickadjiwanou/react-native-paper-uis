import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { createActivityIndicatorScreenStyle } from "./ActivityIndicatorScreen.style.js";
import { ThemeContext } from "../../contexts/ThemeContext";
import Back from "../../components/Back/Back.js";

const ActivityIndicatorScreen = (props) => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const ActivityIndicatorStyle = createActivityIndicatorScreenStyle(theme);
  const [activityIndicator, setActivityIndicator] = useState("small");

  const toggleActivityIndicator = () => {
    switch (activityIndicator) {
      case "small":
        setActivityIndicator("large");
        break;
      case "large":
        setActivityIndicator("100");
        break;
      case "100":
        setActivityIndicator("small");
        break;
      default:
        setActivityIndicator("small");
        break;
    }
  };

  return (
    <View style={ActivityIndicatorStyle.view}>
      <Back title={"Activity Indicator"} />
      <View style={ActivityIndicatorStyle.content}>
        <View style={ActivityIndicatorStyle.container}>
          <ActivityIndicator
            animating={true}
            color={theme.colors.primary}
            size={
              activityIndicator === "small"
                ? "small"
                : activityIndicator === "large"
                ? "large"
                : parseInt(activityIndicator)
            }
            hidesWhenStopped={true}
          />
        </View>

        <Text style={ActivityIndicatorStyle.text}>
          {activityIndicator === "small"
            ? "Small"
            : activityIndicator === "large"
            ? "Large"
            : "Number: " + activityIndicator}
        </Text>

        <Button
          compact={false}
          mode="contained"
          icon="autorenew"
          accessibilityLabel="Activity Indicator"
          accessibilityHint="Activity Indicator"
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          onLongPress={() => {}}
          onPress={toggleActivityIndicator}
          labelStyle={{
            color: theme.colors.text,
            fontSize: theme.fontSizes.normal,
          }}
          testID="toggle-activity-indicator-button"
          accessible={true}
        >
          Toggle Activity Indicator
        </Button>
      </View>
    </View>
  );
};

export default ActivityIndicatorScreen;
