import React, { useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../Header/Header";
import Quotes from "../Quotes/Quotes";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Members from "../Members/Members";
import ParticlesBG from "../../Components/Particles/ParticlesBG";

import styles from "./Homepage.module.css";
import Contact from "../Contact/Contact";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className={styles.color_sm} />
      <Quotes />
      <div className={styles.color_md} />
      <About />
      <div className={styles.color_lg} />
      <Projects />
      <div className={styles.color_lg2} />
      <div className={styles.color_lg3} />
      <Members />
      <div className={styles.color_md2} />
      <div className={styles.color_lg4} />
      <Contact />
      <div className={styles.color_sm1} />
    </>
  );
};

export default Homepage;
