import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import about from "../../assets/Images/about/about.png";

import AnimateDivToTop from "../../Animation/AnimateDiv";

const About = () => {
  return (
    <>
      <section className={styles.a_section}>
        <div className={styles.container}>
          <div className={styles.text_wrapper}></div>
          <div className={styles.text_wrapper}>
            <div className={styles.text}>
              <AnimateDivToTop>
                <h4>Who are we</h4>
                <p>
                  We are a sub-organization of the Philippine Society of
                  Information Technology Students under the School of Business
                  and Information Technology is an academic club for BSIT
                  Students.
                </p>
              </AnimateDivToTop>

              <div className={styles.text}>
                <AnimateDivToTop>
                <h4>Our Purpose</h4>
                <p>
                  <span>Foster</span> a creative community among IT students,
                  promoting innovation, programming skills, and design
                  proficiency for successful careers in the IT industry.
                </p>
                </AnimateDivToTop>
                <AnimateDivToTop>
                <p>
                  <span>Provide</span> a platform for students to explore
                  emerging technologies, develop practical applications, enhance
                  their problem-solving abilities, and attend relevant workshops
                  to further improve their respective IT skills.
                </p>
                </AnimateDivToTop>
                <AnimateDivToTop>
                <p>
                  <span>Create</span> events that showcase and encourage
                  students to be competitive with their skills, providing
                  opportunities for them to demonstrate their talents and
                  abilities to a broader audience.
                </p>
                </AnimateDivToTop>
              </div>
            </div>
          </div>
        </div>
        <div className="club_image">
          <img src={about} alt="SIPD" className={styles.a_image} />
        </div>
      </section>
    </>
  );
};

export default About;
