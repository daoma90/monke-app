import React from "react";
import HorizontalPadding from "../../components/atoms/HorizontalPadding";
import ResetPasswordView from "../../components/organisms/ResetPasswordView";
import ScreenContainer from "../../components/organisms/ScreenContainer";

const ResetPasswordScreen = () => {
  return (
    <ScreenContainer>
      <HorizontalPadding>
        <ResetPasswordView />
      </HorizontalPadding>
    </ScreenContainer>
  );
};

export default ResetPasswordScreen;
