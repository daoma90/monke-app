import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import NavigationItem from "../../atoms/NavigationItem";
import * as s from "./styles";

const NavigationGrid = () => {
  const window = Dimensions.get("window");
  const { t } = useTranslation();

  return (
    <s.Grid>
      <s.Row height="28%">
        <NavigationItem
          title={t("headers.calendar")}
          size={{ width: "100%" }}
          id="calendar"
          image={require("../../../../assets/calendar.png")}
          link="CalendarScreen"
        />
      </s.Row>
      <s.Row height="44%">
        <NavigationItem
          title={t("headers.members")}
          size={{ width: window.width / 2 - 30 + "px" }}
          id="members"
          image={require("../../../../assets/members.png")}
          link="MembersScreen"
        />
        <NavigationItem
          title={t("headers.gallery")}
          size={{ width: window.width / 2 - 30 + "px", height: "100%" }}
          id="gallery"
          image={require("../../../../assets/gallery.png")}
          link="GalleryScreen"
        />
      </s.Row>
      <s.Row height="28%" noMarginBottom>
        <NavigationItem
          title={t("headers.profile")}
          size={{ width: "100%" }}
          id="profile"
          image={require("../../../../assets/profile.png")}
          link="ProfileScreen"
        />
      </s.Row>
    </s.Grid>
  );
};

export default NavigationGrid;
