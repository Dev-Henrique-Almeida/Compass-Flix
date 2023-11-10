import React, { useState } from "react";
import Button from "../button";
import plusIcon from "@/public/icons/plus.svg";
import doneIcon from "@/public/icons/done_black.svg";
import styles from "./Button.module.scss";

export function WhitelistButton() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Button
      onClick={toggleClick}
      Icon={isClicked ? doneIcon : plusIcon}
      className={styles.button}
    />
  );
}
