import React from "react";
import styles from "./SideBarMenu.module.css";

const SideBarMenu = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Musics</span>
        </li>
        <li>
          <span>Albums</span>
        </li>
        <li>
          <span>Artists</span>
        </li>
      </ul>
    </>
  );
};

export default SideBarMenu;
