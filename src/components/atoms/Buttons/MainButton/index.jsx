import React from "react";
import { ActivityIndicator, Button, View } from "react-native";
import { useThemeContext } from "../../../../context/ThemeContext";
import CustomTouchable from "../../CustomTouchable";
import { ButtonText } from "../../typography";
import * as s from "./styles";

const MainButton = ({ label, onPress, color, loading }) => {
  const { theme } = useThemeContext();

  return (
    <s.StyledContainer color={color}>
      <CustomTouchable onPress={onPress}>
        <s.StyledView>
          <s.TextContainer>
            <ButtonText color={theme.colors.textPrimary}>{label}</ButtonText>
          </s.TextContainer>
          {loading && (
            <s.SpinnerContainer>
              <ActivityIndicator size="small" color={theme.colors.textPrimary} />
            </s.SpinnerContainer>
          )}
        </s.StyledView>
      </CustomTouchable>
    </s.StyledContainer>
  );
};

export default MainButton;
