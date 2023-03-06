import React from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../context/ThemeContext";
import { HeaderLarge } from "../../atoms/typography";
import ResetPasswordForm from "../../molecules/ResetPasswordForm";
import * as s from "./styles";

const ResetPasswordView = () => {
  const { t } = useTranslation();
  const { theme } = useThemeContext();

  return (
    <s.Container>
      <HeaderLarge color={theme.colors.textPrimary}>{t("headers.resetPassword")}</HeaderLarge>
      <ResetPasswordForm />
    </s.Container>
  );
};

export default ResetPasswordView;
