import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBackStyle } from "./Back.style.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../contexts/ThemeContext";

const Back = (props) => {
  const navigation = useNavigation();
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const BackStyle = createBackStyle(theme);

  return (
    <View style={BackStyle.view}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        style={BackStyle.element}
      >
        <AntDesign name="left" size={18} color={theme.colors.blackWhite} />
      </TouchableOpacity>
      <Text style={BackStyle.title}>{props.title}</Text>
      <View style={BackStyle.element2} />
    </View>
  );
};
export default Back;
