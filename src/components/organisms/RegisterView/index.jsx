import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../context/ThemeContext";
import { HeaderLarge } from "../../atoms/typography";
import RegisterForm from "../../molecules/RegisterForm";
import * as s from "./styles";

const RegisterView = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <s.Container>
      <HeaderLarge color={theme.colors.textPrimary}>{t("headers.register")}</HeaderLarge>
      <RegisterForm />
    </s.Container>
  );
};

export default RegisterView;
