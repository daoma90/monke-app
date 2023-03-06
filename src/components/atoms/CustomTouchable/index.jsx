import React from "react";
import { Platform, TouchableNativeFeedback, TouchableOpacity } from "react-native";

const CustomTouchable = ({ children, onPress }) => {
  if (Platform.OS === "ios") {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  } else {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple()}
        useForeground={true}
        onPress={onPress}
      >
        {children}
      </TouchableNativeFeedback>
    );
  }
};

export default CustomTouchable;
