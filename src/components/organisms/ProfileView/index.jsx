import React from "react";
import ProfileSettings from "../../molecules/ProfileSettings";
import SplitScreen from "../../molecules/SplitScreen";
import UserProfile from "../../molecules/UserProfile";

const ProfileView = () => {
  return <SplitScreen topComponent={<UserProfile />} bottomComponent={<ProfileSettings />} />;
};

export default ProfileView;
