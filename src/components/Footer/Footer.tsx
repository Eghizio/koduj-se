"use client";
import { HeartIcon } from "./HeartIcon";

const iconStyle = { display: "inline", height: "0.8rem" };

export const Footer = ({ location }: { location: string }) => {
  console.info(
    `Made with %c♥%c in ${location}`,
    "color: #e25555",
    "color: unset"
  );

  return (
    <p>
      Developed with <HeartIcon style={iconStyle} /> in {location}
    </p>
  );
};
