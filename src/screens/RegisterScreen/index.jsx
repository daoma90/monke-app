import React from "react";
import HorizontalPadding from "../../components/atoms/HorizontalPadding";
import RegisterView from "../../components/organisms/RegisterView";
import ScreenContainer from "../../components/organisms/ScreenContainer";

const RegisterScreen = () => {
  return (
    <ScreenContainer>
      <HorizontalPadding>
        <RegisterView />
      </HorizontalPadding>
    </ScreenContainer>
  );
};

export default RegisterScreen;
