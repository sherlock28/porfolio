import React from "react";
import styles from "./Card.module.css";

export default function Card({ project }) {
  return (
    <div className={`col mb-4`}>
      <div className={`${styles.custom_card} card my-2`}>
        <a
          href={project.pageURL}
          className={`${styles.link}`}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className={`${styles.title_project} card-title text-center px-3`}>
            {project.title}
          </h4>
        </a>
        <div className={styles.img_container}>
          <img
            src={project.imageURL}
            alt="img project"
            className={`${styles.img_project} img-fluid px-3`}
          />
        </div>
        <div className="card-body">
          <p className={`${styles.desc_project}`}>{project.description}</p>

          <a
            href={project.repositoryURL}
            className={`${styles.btn_git} btn btn-sm btn-block py-2`}
            target="_blank"
            rel="noreferrer"
          >
            GIT
          </a>
        </div>
      </div>
    </div>
  );
}
