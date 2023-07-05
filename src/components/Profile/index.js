import React from "react";
import avatar from "assets/avatar.jpeg";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={`${styles.profile} mt-2`}>
      <div className={`${styles.card_profile} mt-2`}>
        <div className="text-center">
          <img src={avatar} alt="avatar" className={`${styles.pic}`} />
        </div>
        <div className="card-body">
          <h1 className={`${styles.h1_name} text-center`}>
            Victor Rodolfo Cáceres
          </h1>
          <p className={`text-center ${styles.h2_subtitle}`}>
            Hello 👋, My name is Rodolfo, I'm from Argentina and I'm a Full
            Stack Developer. I have experience working with ReactJS, NodeJS and also a little with Java and OOP. I studied Engineering in information systems at UTN. I'm passionate about technology, creating new things.
          </p>
        </div>
      </div>
    </div>
  );
}
