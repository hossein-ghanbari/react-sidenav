import React, { useState } from "react";
import styles from "./SideBar.module.css";
import menuBarImage from "../../assets/bar.png";

import SideBarMenu from "./sideBarMenu/SideBarMenu";

const SideBar = () => {
  const [sideShow, setSideShow] = useState(false);

  const handleSideShow = () => {
    setSideShow(!sideShow);
  };

  return (
    <>
      <span className={styles.sideTrigger} onClick={handleSideShow}>
        <img src={menuBarImage} alt="" />
      </span>

      <div className={`${styles.sideOverlay} ${sideShow && styles.show}`} onClick={handleSideShow} />

      <aside className={`${styles.SideBarBox} ${sideShow ? styles.show : styles.hide}`}>
        your sidebar menu component
        <SideBarMenu />
      </aside>
    </>
  );
};

export default SideBar;
