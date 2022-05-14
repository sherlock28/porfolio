import React from "react";
import styles from "./Footer.module.css";

export default function footer() {
  return (
    <footer className={`page-footer font-small special-color-dark mt-5`}>
      <div className={`${styles.copyright} footer-copyright text-center py-1`}>
        <span>© 2021 Copyright: Victor Rodolfo Cáceres</span>
      </div>
    </footer>
  );
}
