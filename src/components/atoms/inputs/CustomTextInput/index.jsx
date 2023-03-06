import React, { useState } from "react";
import { TextInput } from "react-native";
import { Controller } from "react-hook-form";
import * as s from "./styles";
import { BreadMedium, InputText } from "../../typography";
import { useThemeContext } from "../../../../context/ThemeContext";

const CustomTextInput = ({ control, name, defaultValue, label, errors }) => {
  const [focused, setFocused] = useState(false);
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
            />
          );
        }}
        name={name}
        defaultValue={defaultValue}
      />
      <s.BorderBottom color={theme.colors.textPrimary} />
      <s.ErrorContainer>
        {errors && <BreadMedium color={theme.colors.danger}>Test</BreadMedium>}
      </s.ErrorContainer>
    </s.Container>
  );
};

export default CustomTextInput;
