import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../context/ThemeContext";
import { HeaderLarge } from "../../atoms/typography";
import LoginForm from "../../molecules/LoginForm";
import * as s from "./styles";

const LoginView = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <s.Container>
      <HeaderLarge color={theme.colors.textPrimary}>{t("headers.login")}</HeaderLarge>
      <LoginForm />
    </s.Container>
  );
};

export default LoginView;
