import React from "react";
import styles from "./Header.module.css";
import sipdlogo from "../../assets/Images/Logo.png";

import AnimateDivToTop from "../../Animation/AnimateDiv";
import { AnimateDivToRight } from "../../Animation/AnimteDivRight";

const Header = () => {
  return (
    <>
      <section className={styles.h_section}>
        <div className={styles.container}>
          <div className={styles.text}>
            <AnimateDivToTop>
              <h1>SIPD</h1>
              <h2>Society of Innovators, Programmer, and Designers</h2>
            </AnimateDivToTop>
          </div>
          <AnimateDivToRight>
          <div className={styles.image}>
            <img src={sipdlogo} alt="" />
          </div>
          </AnimateDivToRight>
        </div>
        <div className={styles.rotated_scroll}>
          <div className={styles.rotated}>scroll</div>
        </div>
      </section>
    </>
  );
};

export default Header;
