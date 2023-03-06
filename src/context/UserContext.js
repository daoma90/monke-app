import { createContext, useContext, useEffect, useState } from "react";
import { appUser } from "../theme/theme";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = (uid) => {};

  const handleSetUser = (theme) => {
    setUser(appUser[theme]);
  };

  const values = {
    theme,
    handleSetUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
