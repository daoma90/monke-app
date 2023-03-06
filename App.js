import { ThemeProvider } from "./src/context/ThemeContext";
import "./i18n";
import RootNavigation from "./src/navigators/RootNavigation";

import "react-native-reanimated";
import "react-native-gesture-handler";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
