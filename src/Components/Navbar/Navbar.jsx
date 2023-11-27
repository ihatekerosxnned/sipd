import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <div className={styles.nav_contianer}>
            <div className={styles.nav_logo}>
                <h1>SIPD</h1>
            </div>
            <ul className={styles.nav_links}>
                <li className={styles.links}><a href="#">about</a></li>
                <li className={styles.links}><a href="#">projects</a></li>
                <li className={styles.links}><a href="#">members</a></li>
                <button className='btn-primary'>join us.</button>      
            </ul>   
        </div>
    </nav>
  );
};

export default Navbar;
