import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
  password: "",
};

const LoginForm = () => {
  const { t } = useTranslation("translation");
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  const { handleSignIn } = useAuthContext();
  const [loading, setLoading] = useState();
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
    const response = await handleSignIn(data.email, data.password);

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
        <CustomPasswordInput
          control={control}
          name="password"
          label={t("forms.labels.password")}
          defaultValue={defaultValues.password}
          errors={errors.password}
        />
      </s.InputsContainer>

      <ButtonContainer>
        <Button
          label={t("buttons.labels.login")}
          onPress={handleSubmit(onSubmit)}
          type="filled"
          color={theme.colors.secondaryAccent}
          loading={loading}
        />
        <Button
          label={t("buttons.labels.register")}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
          type="outline"
          color={theme.colors.secondaryAccent}
        />
        <Button
          label={t("buttons.labels.forgotPassword")}
          onPress={() => {
            navigation.navigate("ResetPasswordScreen");
          }}
          type="outline"
          color={theme.colors.secondaryAccent}
        />
      </ButtonContainer>
    </s.Container>
  );
};

export default LoginForm;
