import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../../context/AuthContext";
import { useThemeContext } from "../../../context/ThemeContext";
import ButtonContainer from "../../atoms/ButtonContainer";
import Button from "../../atoms/Buttons";
import CustomKeyboardAvoidingView from "../../atoms/CustomKeyboardAvoidingView";
import CustomPasswordInput from "../../atoms/inputs/CustomPasswordInput";
import CustomTextInput from "../../atoms/inputs/CustomTextInput";
import * as s from "./styles";

const defaultValues = {
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
};

const RegisterForm = () => {
  const { t } = useTranslation("translation");
  const { theme } = useThemeContext();
  const navigation = useNavigation();
  const { handleRegister } = useAuthContext();
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
    const response = await handleRegister(data.email, data.username, data.password);
    setLoading(false);
  };

  return (
    // <CustomKeyboardAvoidingView>
    <s.Container>
      <s.InputsContainer>
        <CustomTextInput
          control={control}
          name="email"
          label={t("forms.labels.email")}
          defaultValue={defaultValues.email}
          errors={errors.email}
        />
        <CustomTextInput
          control={control}
          name="username"
          label={t("forms.labels.username")}
          defaultValue={defaultValues.username}
          errors={errors.username}
        />
        <CustomPasswordInput
          control={control}
          name="password"
          label={t("forms.labels.password")}
          defaultValue={defaultValues.password}
          errors={errors.password}
        />
        <CustomPasswordInput
          control={control}
          name="repeatPassword"
          label={t("forms.labels.repeatPassword")}
          defaultValue={defaultValues.repeatPassword}
          errors={errors.repeatPassword}
        />
      </s.InputsContainer>
      <ButtonContainer>
        <Button
          label={t("buttons.labels.register")}
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
    // </CustomKeyboardAvoidingView>
  );
};

export default RegisterForm;
