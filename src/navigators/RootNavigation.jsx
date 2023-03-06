import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import { useThemeContext } from "../context/ThemeContext";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

const RootNavigation = () => {
  const { user } = useAuthContext();
  const { theme } = useThemeContext();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer theme={DarkTheme}>
        {user ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
