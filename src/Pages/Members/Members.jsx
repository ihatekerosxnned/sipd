import React from "react";
import styles from "./Members.module.css";

import { membersLeft, membersRight, sipdMembers } from "./MembersData";
import { AnimateDivToRight } from "../../Animation/AnimteDivRight";

import AnimateDivToTop from "../../Animation/AnimateDiv";

const Members = () => {
  return (
    <section className={styles.m_section}>
      <div className={styles.text_wrapper}>
        <span>
          <h4>Meet the team</h4>
        </span>
        <h3>TEAM SIPD</h3>
      </div>
      <div className={styles.slider}>
        <div className={styles.slider_track}>
          {sipdMembers.map((data, items) => {
            return (
              <div className={styles.slide} key={items}>
                <div className={styles.slide_img}>
                  <img src={data.imgSrc} alt="" />
                </div>
                <div className={styles.slide_text}>
                  <p>{data.name}</p>
                </div>
              </div>
            );
          })}
          {/* DUPLICATE THE MAP BRODIE */}
          {sipdMembers.map((data, items) => {
            return (
              <div className={styles.slide} key={items}>
                <div className={styles.slide_img}>
                  <img src={data.imgSrc} alt="" />
                </div>
                <div className={styles.slide_text}>
                  <p>{data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          {membersLeft.map((data, items) => {
            return (
              <AnimateDivToRight>
                <div className={styles.card_left_wrapper} key={items}>
                  <div className={styles.card_img}>
                    <img src={data.imgSrc} alt="" />
                  </div>
                  <div className={styles.card_text}>
                    <h4>{data.name}</h4>
                    <p>{data.pos} </p>
                  </div>
                </div>
              </AnimateDivToRight>
            );
          })}
        </div>
        <div className={styles.right}>
          {membersRight.map((data, items) => {
            return (
              <AnimateDivToTop>
                <div className={styles.card_right_wrapper} key={items}>
                  <div className={styles.card_img}>
                    <img src={data.imgSrc} alt="" />
                  </div>
                  <div className={styles.card_text}>
                    <h4>{data.name}</h4>
                    <p>{data.pos} </p>
                  </div>
                </div>
              </AnimateDivToTop>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Members;
