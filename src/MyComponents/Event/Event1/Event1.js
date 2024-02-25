import React from "react";
import styles from "./Event1.module.css";
import HighlightCard from "../../../MyComponents/Home/HighlightCard";
import Testimonials from "../../../MyComponents/Testimonials";
import Tilt from "react-parallax-tilt";

const Event1 = () => {
  return (
    <div id="about-us" className={styles.container}>
      {/* Event Description */}

      <div className={styles.societyDescription}>
        <div className={styles.container1}>
          <div className={styles.left}>
            <h1 className={styles.heading}>North East Festival 2023</h1>
            <p>
              We organize a diverse set of events aimed at all round development
              of the North Eastern students at IIT Kharagpur and promoting and
              showcasing North Eastern culture and tradition. Take a glimpse at
              our work so far below.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.subright}>
              <p className={styles.color1}>5K+ </p>
              <p> footfalls</p>
            </div>

            <p className={styles.subright}>
              <p className={styles.color2}>15K+</p>
              <p>performances</p>
            </p>
            <p className={styles.subright}>
              <p className={styles.color3}>20K+</p> <p>something</p>
            </p>
          </div>
        </div>

        <div className={styles.photos}>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src="/highlights/highlight-4.jpg" alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src="/highlights/highlight-2.jpg" alt="highlight" />
          </Tilt>
          <Tilt className={styles.photo} glareEnable={true}>
            <img src="/highlights/highlight-3.jpg" alt="highlight" />
          </Tilt>
        </div>

        <div className={styles.container1}>
          <div className={styles.left}>
            <h1 className={styles.heading}>North East Festival 2023</h1>
            <p>
              We organize a diverse set of events aimed at all round development
              of the North Eastern students at IIT Kharagpur and promoting and
              showcasing North Eastern culture and tradition. Take a glimpse at
              our work so far below.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.subright1}>
              <p className={styles.heading}>Other events </p>
              <div className={styles.others}>Career Councelling Session</div>
              <div className={styles.others}>Food Fest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event1;
