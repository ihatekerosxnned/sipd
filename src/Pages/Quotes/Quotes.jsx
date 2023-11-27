import React from "react";
import styles from "./Quotes.module.css";
import { AnimateDivToRight } from "../../Animation/AnimteDivRight";

const Quotes = () => {
  return (
    <section className={styles.q_section}>
      <div className={styles.container}>
        <AnimateDivToRight>
          <h3>
            Technology is our playground, where creativity meets innovation and
            dreams take flight.
          </h3>
        </AnimateDivToRight>
      </div>
    </section>
  );
};

export default Quotes;
