import React from "react";
import { Image, Text } from "react-native";
import ScreenContainer from "../../components/organisms/ScreenContainer";

const MembersScreen = () => {
  return (
    <ScreenContainer>
      <Image source={require("../../../assets/members.png")} />
    </ScreenContainer>
  );
};

export default MembersScreen;
