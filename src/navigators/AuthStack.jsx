import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomLogo from "../components/atoms/CustomLogo";
import { useThemeContext } from "../context/ThemeContext";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { theme } = useThemeContext();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({}) => ({
        headerShown: true,
        headerTitle: () => <CustomLogo />,
        headerStyle: {
          backgroundColor: theme.colors.primaryAccent,
        },
        headerBackVisible: false,
      })}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
