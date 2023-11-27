import React, { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import { projectsData } from "./ProjectsData";
import { AnimateDivToRight } from "../../Animation/AnimteDivRight";

const Projects = () => {
  useEffect(() => {
    const link = document.querySelectorAll(".link");
    const linkHoverReveal = document.querySelectorAll(".hover-reveal");
    const linkImages = document.querySelectorAll(".hidden-img");

    for (let i = 0; i < link.length; i++) {
      link[i].addEventListener("mousemove", (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[
          i
        ].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
        linkImages[i].style.transform = "scale(1, 1)";
        linkHoverReveal[i].style.left = e.clientX + "px";
      });

      link[i].addEventListener("mouseleave", (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[
          i
        ].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[i].style.transform = "scale(0.8, 0.8)";
      });
    }
  }, []);
  return (
    <section className={styles.p_section}>
      <div className={styles.container}>
        <span>
          <h4>Activities</h4>
        </span>
        <div className={styles.wrapper}>
          <ul>
            {projectsData.map((data, items) => {
              return (
                <AnimateDivToRight>
                  <li key={data.id}>
                    <div className={`link ${styles.link}`}>
                      <h4>{data.name}</h4>
                      <h4>{data.year}</h4>
                      <div className={`hover-reveal ${styles.hover_reveal}`}>
                        <img
                          src={data.imgSrc}
                          className={`hidden-img ${styles.hidden_img}`}
                          alt={data.name}
                        />
                      </div>
                    </div>
                  </li>
                </AnimateDivToRight>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
