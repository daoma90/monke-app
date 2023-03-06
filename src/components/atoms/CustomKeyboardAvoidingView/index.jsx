import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

const CustomKeyboardAvoidingView = ({ children }) => {
  return (
    <StyledKeyboardAvoidingView
      enableOnAndroid
      enableAutomaticScroll={Platform.OS === "ios"}
      extraScrollHeight={50}
      extraHeight={50}
    >
      {children}
    </StyledKeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;

const StyledKeyboardAvoidingView = styled(KeyboardAwareScrollView)`
  width: 100%;
  height: 100%;
`;
