import React, { useEffect, useState, useRef } from "react";
import styles from "./Contact.module.css";

import fb from "../../assets/Images/icons/fb.svg";
import git from "../../assets/Images/icons/git.svg";
import AnimateDivToTop from "../../Animation/AnimateDiv";

const Contact = () => {
  const date = new Date().toLocaleDateString();
  const [realTime, setRealTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRealTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className={styles.c_section}>
      <AnimateDivToTop>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.form_group}>
            <div className={styles.text}>
              <h4>Let's shape the future together</h4>
              <p>
                Explore exciting opportunities in startups, agencies, and design
                studios. Unlock your potential in a tailored environment.
              </p>
            </div>
            <form>
              <div className={styles.user_box}>
                <input
                  required=""
                  name=""
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className={styles.user_box}>
                <input
                  required=""
                  name=""
                  type="text"
                  placeholder="Your email"
                />
              </div>

              <div className={styles.user_box}>
                <textarea
                  required=""
                  name=""
                  type="text"
                  placeholder="Your message"
                />
              </div>
              <button className="btn-primary">send message</button>
            </form>
          </div>
          {/* RIGHT SIDE UNGAS */}
          <div className={styles.form_details}>
            <div className={styles.text}>
              <h4>Contact Details</h4>
              <p>sipdclub@lccb.online.edu.ph</p>
            </div>
            <div className={styles.text}>
              <h4>social media</h4>
              <ul>
                <li>
                  <img src={fb} alt="" />
                  <a href="https://www.facebook.com/LCCBIT">Facebook</a>
                </li>
                <li>
                  <img src={git} alt="" />
                  <a href="https://github.com/ihatekerosxnned">Github</a>
                </li>
              </ul>
            </div>
            <div className={styles.text}>
              <h4>Our Location</h4>
              <p>Galo St, Bacolod</p>
              <p>6100 Negros Occidental</p>
              <p>{date}</p>
              <p>{realTime}</p>
            </div>
          </div>
        </div>
      </div>
      </AnimateDivToTop>
    </section>
  );
};

export default Contact;
