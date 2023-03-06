import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import CustomLogo from "../components/atoms/CustomLogo";
import CalendarScreen from "../screens/CalendarScreen";
import GalleryScreen from "../screens/GalleryScreen";
import HomeScreen from "../screens/HomeScreen";
import MembersScreen from "../screens/MembersScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerShown: true,
      })}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({}) => ({
          headerTitle: () => <CustomLogo />,
        })}
      />
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={({}) => ({
          headerTitle: t("headers.calendar"),
        })}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={({}) => ({
          headerTitle: t("headers.gallery"),
        })}
      />
      <Stack.Screen
        name="MembersScreen"
        component={MembersScreen}
        options={({}) => ({
          headerTitle: t("headers.members"),
        })}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({}) => ({
          headerTitle: t("headers.profile"),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
