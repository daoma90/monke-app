import React, { useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { useThemeContext } from "../../../context/ThemeContext";
import Avatar from "../../atoms/Avatar";
import { HeaderLarge } from "../../atoms/typography";
import * as s from "./styles";

const UserProfile = () => {
  const { user } = useAuthContext();
  const { theme } = useThemeContext();
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  return (
    <s.Container>
      <Avatar image={require("../../../../assets/doge.webp")} size={100} />
      <HeaderLarge color={theme.colors.textPrimary}>{user.db.username}</HeaderLarge>
    </s.Container>
  );
};

export default UserProfile;
