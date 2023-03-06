import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { useAuthContext } from "../../../context/AuthContext";
import ProfileSettingsItem from "../../atoms/ProfileSettingsItem";
import * as s from "./styles";

const ProfileSettings = () => {
  const { t } = useTranslation();
  const { handleSignOut } = useAuthContext();
  const navigation = useNavigation();
  return (
    <s.StyledScrollView>
      <ProfileSettingsItem title={t("profileMenu.editAvatar")} icon="create-outline" />
      <ProfileSettingsItem title={t("profileMenu.editUsername")} icon="chevron-forward-outline" />
      <ProfileSettingsItem title={t("profileMenu.editPassword")} icon="chevron-forward-outline" />
      <ProfileSettingsItem title={t("profileMenu.privacyPolicy")} icon="chevron-forward-outline" />
      <ProfileSettingsItem
        title={t("profileMenu.logOut")}
        icon="log-out-outline"
        onPress={handleSignOut}
      />
    </s.StyledScrollView>
  );
};

export default ProfileSettings;
