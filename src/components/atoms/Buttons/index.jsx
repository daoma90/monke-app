import React from "react";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

const Button = ({ label, type, onPress, color, icon, loading }) => {
  let button;

  switch (type) {
    case "filled":
      button = (
        <MainButton label={label} onPress={onPress} color={color} icon={icon} loading={loading} />
      );
      break;
    case "outline":
      button = (
        <SecondaryButton
          label={label}
          onPress={onPress}
          color={color}
          icon={icon}
          loading={loading}
        />
      );
      break;
    default:
      button = (
        <MainButton label={label} onPress={onPress} color={color} icon={icon} loading={loading} />
      );
      break;
  }

  return button;
};

export default Button;
