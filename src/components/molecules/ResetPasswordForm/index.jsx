import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../../context/AuthContext";
import { useThemeContext } from "../../../context/ThemeContext";
import ButtonContainer from "../../atoms/ButtonContainer";
import Button from "../../atoms/Buttons";
import CustomPasswordInput from "../../atoms/inputs/CustomPasswordInput";
import CustomTextInput from "../../atoms/inputs/CustomTextInput";
import * as s from "./styles";

const defaultValues = {
  email: "",
};

const ResetPasswordForm = () => {
  const { t } = useTranslation("translation");
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  const { handleResetPassword } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const response = await handleResetPassword(data.email);

    setLoading(false);
  };

  return (
    <s.Container>
      <s.InputsContainer>
        <CustomTextInput
          control={control}
          name="email"
          label={t("forms.labels.email")}
          defaultValue={defaultValues.email}
          errors={errors.email}
        />
      </s.InputsContainer>

      <ButtonContainer>
        <Button
          label={t("buttons.labels.resetPassword")}
          onPress={handleSubmit(onSubmit)}
          type="filled"
          color={theme.colors.secondaryAccent}
          loading={loading}
        />
        <Button
          label={t("buttons.labels.back")}
          onPress={() => {
            navigation.goBack();
          }}
          type="outline"
          color={theme.colors.secondaryAccent}
        />
      </ButtonContainer>
    </s.Container>
  );
};

export default ResetPasswordForm;
