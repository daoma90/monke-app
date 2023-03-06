import { createContext, useContext, useEffect, useState } from "react";
import { appDatabase } from "../theme/theme";

export const DatabaseContext = createContext({});

export const useDatabaseContext = () => {
  return useContext(DatabaseContext);
};

export const DatabaseProvider = ({ children }) => {
  const [theme, setDatabase] = useState(appDatabase.dark);

  const handleSetDatabase = (theme) => {
    setDatabase(appDatabase[theme]);
  };

  const values = {
    theme,
    handleSetDatabase,
  };

  return <DatabaseContext.Provider value={values}>{children}</DatabaseContext.Provider>;
};
