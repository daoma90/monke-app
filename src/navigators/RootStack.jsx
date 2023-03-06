import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        {/* <Stack.Screen name="Home" component={() => {}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
