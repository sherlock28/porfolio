import React from "react";
import styles from "./ContactMe.module.css";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from "react-icons/go";

export default function ContactMe() {
  return (
    <div className="container mt-5">
      <h3 className={`${styles.h2_subtitle} text-center font-weight-bold`}>
        How to contact me?
      </h3>
      <p className="text-center h4">
        If you want to contact me, or just see my expertise, you can see my feed
        on github or linkedin, or send me a message by email, I will answer as
        soon as possible. You can also see my resume here:{" "}
        <a
          href="https://drive.google.com/file/d/1dbwZoh4JB-klrqGWXl_3vGaP57QOQunV/view?usp=sharing"
          className={`${styles.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Victor Rodolfo Cáceres
        </a>
      </p>
      <ul className="list-unstyled list-inline text-center my-5">
        <li className={`list-inline-item ${styles.item}`}>
          <a
            href="https://github.com/sherlock28"
            className="btn-floating btn-li"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles.item_contact}`}><FaGithub /></i>
          </a>
        </li>
        <li className={`list-inline-item ${styles.item}`}>
          <a
            href="mailto:caceresvictorrodolfo@gmail.com"
            className="btn-floating btn-li"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles.item_contact}`}><GoMail /></i>
          </a>
        </li>
        <li className={`list-inline-item ${styles.item}`}>
          <a
            href="https://www.linkedin.com/in/vcaceres"
            className="btn-floating btn-li"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${styles.item_contact}`}><FaLinkedinIn /></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
