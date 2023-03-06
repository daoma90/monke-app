import React from "react";
import HorizontalPadding from "../../components/atoms/HorizontalPadding";
import LoginView from "../../components/organisms/LoginView";
import ScreenContainer from "../../components/organisms/ScreenContainer";

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <HorizontalPadding>
        <LoginView />
      </HorizontalPadding>
    </ScreenContainer>
  );
};

export default LoginScreen;
