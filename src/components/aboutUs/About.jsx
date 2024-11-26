import React from "react";
import styles from "./About.module.css";
import rightImage from "./../../assets/images/rightImage.png";

function AboutUs() {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.left}>
          <div className={styles.left_text}>
           
            <p>Welcome to LAS Recipe</p>
            <h2>Taste the Magic with LAS Recipe!!!</h2>
            <p>Created just now as a fresh idea, LAS Recipe reflects our excitement for innovation and practical solutions. From experimenting with code to curating the best recipes, this platform is the result of teamwork, late-night brainstorming, and a shared passion for food.</p>
            <p>
            LAS Recipe is a passion project brought to life by three college students – Serina, Anish, and Libina – combining creativity, technology, and a love for cooking. Designed to make your culinary adventures easier, our platform is built with a simple yet powerful idea: recommend recipes based on the ingredients you have on hand.
            </p>
        
          </div>
          <div className={styles.right}>
            <img src={rightImage} alt="rightImage" />
          </div>
        </div>
      </div>

      <div className={styles.overview}></div>

      <div className={styles.mission}>
        <div className={styles.text}>
          <div className={styles.mission1}>
            <div className={styles.image}>
              <div className={styles.text}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourTeam}>
        <div className={styles.text}>
          <div className={StyleSheetList.members}>
            <div className={styles.text}>
              <div className={styles.icon}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
