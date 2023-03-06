import React from "react";
import HorizontalPadding from "../../atoms/HorizontalPadding";
import Gallery from "../Gallery";
import ScreenContainer from "../ScreenContainer";

const GalleryView = () => {
  return (
    <ScreenContainer>
      <HorizontalPadding>
        <Gallery />
      </HorizontalPadding>
    </ScreenContainer>
  );
};

export default GalleryView;
