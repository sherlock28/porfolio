import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className="container mt-5 text-center">
      <h3 className={`${styles.h2_subtitle} text-center font-weight-bold`}>
        Skills
      </h3>
      <div className="container">
        <div class="row my-4">
          <div class="col-sm">
            <p className="h4">Html 5</p>
          </div>
          <div class="col-sm">
            <p className="h4">Css 3</p>
          </div>
          <div class="col-sm">
            <p className="h4">Javascript</p>
          </div>
          <div class="col-sm">
            <p className="h4">Java</p>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-sm">
            <p className="h4">NodeJs/ExpressJs</p>
          </div>
          <div class="col-sm">
            <p className="h4">ReactJs</p>
          </div>
          <div class="col-sm">
            <p className="h4">NextJs</p>
          </div>
          <div class="col-sm">
            <p className="h4">Bootstrap - Chakra UI</p>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-sm">
            <p className="h4">MySQL</p>
          </div>
          <div class="col-sm">
            <p className="h4">PostgreSQL</p>
          </div>
          <div class="col-sm">
            <p className="h4">MongoDB</p>
          </div>
          <div class="col-sm">
            <p className="h4">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
}
