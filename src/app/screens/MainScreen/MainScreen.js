import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMainScreenStyle } from "./MainScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../../contexts/ThemeContext";
import appiconself from "../../../assets/icons/appiconself.png";

const MainScreen = () => {
  const navigation = useNavigation();
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  const MainScreenStyle = createMainScreenStyle(theme);

  const elements = [
    {
      id: 1,
      name: "Theme",
      route: "ThemeScreen",
    },
  ];

  const renderElement = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)}
      style={MainScreenStyle.elementButton}
    >
      <Text style={MainScreenStyle.elementButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleToggleTheme = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    toggleTheme(pageX, pageY);
  };

  return (
    <View style={MainScreenStyle.view}>
      <View style={MainScreenStyle.topBar}>
        <Image source={appiconself} style={MainScreenStyle.appicon} />
        <Text style={MainScreenStyle.title}>UI Components</Text>
        <Pressable
          onPress={handleToggleTheme}
          hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        >
          <AntDesign
            name={isDark ? "sun" : "moon"}
            size={22}
            color={theme.colors.blackWhite}
          />
        </Pressable>
      </View>
      <FlatList data={elements} renderItem={renderElement} />
    </View>
  );
};

export default MainScreen;
