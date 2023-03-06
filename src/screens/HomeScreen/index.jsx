import React from "react";
import HorizontalPadding from "../../components/atoms/HorizontalPadding";
import HomeView from "../../components/organisms/HomeView";
import ScreenContainer from "../../components/organisms/ScreenContainer";

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <HorizontalPadding>
        <HomeView />
      </HorizontalPadding>
    </ScreenContainer>
  );
};

export default HomeScreen;
