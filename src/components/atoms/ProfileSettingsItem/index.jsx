import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import CustomTouchable from "../CustomTouchable";
import HorizontalPadding from "../HorizontalPadding";
import Icon from "../Icon";
import { BreadMedium } from "../typography";
import * as s from "./styles";

const ProfileSettingsItem = ({ title, icon, onPress }) => {
  const { theme } = useThemeContext();
  return (
    <>
      <CustomTouchable onPress={onPress}>
        <s.Container>
          <BreadMedium color={theme.colors.textPrimary}>{title}</BreadMedium>
          <Icon name={icon} size={25} color={theme.colors.textPrimary} />
        </s.Container>
      </CustomTouchable>
      <HorizontalPadding>
        <s.Divider color={theme.colors.textPrimary} />
      </HorizontalPadding>
    </>
  );
};

export default ProfileSettingsItem;
