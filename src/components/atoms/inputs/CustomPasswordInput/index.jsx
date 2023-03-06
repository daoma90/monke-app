import React, { useState } from "react";
import { TextInput } from "react-native";
import { Controller } from "react-hook-form";
import * as s from "./styles";
import { BreadMedium, InputText } from "../../typography";
import { useThemeContext } from "../../../../context/ThemeContext";
import Icon from "../../Icon";
import CustomTouchable from "../../CustomTouchable";

const CustomPasswordInput = ({ control, name, defaultValue, label, errors }) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useThemeContext();
  const handleOnBlur = (value) => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <s.Container>
      <s.LabelContainer
        from={{ top: 0 }}
        animate={focused && { top: -25 }}
        transition={{ type: "timing", duration: 500, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <InputText color={theme.colors.textPrimary}>{label}</InputText>
      </s.LabelContainer>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <s.StyledInput
              onBlur={() => {
                handleOnBlur(value);
                onBlur();
              }}
              onChangeText={onChange}
              value={value}
              onFocus={() => setFocused(true)}
              color={theme.colors.textPrimary}
              secureTextEntry={!showPassword}
            />
          );
        }}
        name={name}
        defaultValue={defaultValue}
      />

      <CustomTouchable onPress={() => setShowPassword(!showPassword)}>
        <s.IconContainer>
          {showPassword ? (
            <Icon name="eye-off-outline" size={25} color={theme.colors.textPrimary} />
          ) : (
            <Icon name="eye-outline" size={25} color={theme.colors.textPrimary} />
          )}
        </s.IconContainer>
      </CustomTouchable>

      <s.BorderBottom color={theme.colors.textPrimary} />
      <s.ErrorContainer>
        {errors && <BreadMedium color={theme.colors.danger}>Test</BreadMedium>}
      </s.ErrorContainer>
    </s.Container>
  );
};

export default CustomPasswordInput;
