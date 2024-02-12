import React, { useState } from "react";
import Button from "../button";
import icon from "@/public/icons/star.svg";
import doneIcon from "@/public/icons/done_black.svg";
import styles from "./Button.module.scss";

type Props = {};

export function FavoriteButton() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Button
      onClick={toggleClick}
      Icon={isClicked ? doneIcon : icon}
      className={styles.button}
    />
  );
}
