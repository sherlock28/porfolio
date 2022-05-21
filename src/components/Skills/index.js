import React from "react";
import styles from "./Skills.module.css";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiChakraui, SiCsharp, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaReact, FaVuejs, FaBootstrap } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="container mt-5 text-center">
      <h3 className={`${styles.h2_subtitle} text-center font-weight-bold`}>
        Skills
      </h3>
      <div className="container">
        <div className="row row-cols-4">
          <div className="col p-3"><i className="h1"><AiFillHtml5 /></i></div>
          <div className="col p-3"><i className="h1"><DiCss3 /></i></div>
          <div className="col p-3"><i className="h1"><SiJavascript /></i></div>
          <div className="col p-3"><i className="h1"><FaNodeJs /></i></div>
          <div className="col p-3"><i className="h1"><FaReact /></i></div>
          <div className="col p-3"><i className="h1"><FaVuejs /></i></div>
          <div className="col p-3"><i className="h1"><FaBootstrap /></i></div>
          <div className="col p-3"><i className="h1"><SiChakraui /></i></div>
          <div className="col p-3"><i className="h1"><SiCsharp /></i></div>
          <div className="col p-3"><i className="h1"><SiMysql/></i></div>
          <div className="col p-3"><i className="h1"><SiPostgresql /></i></div>
          <div className="col p-3"><i className="h1"><SiMongodb /></i></div>
        </div>
      </div>
    </div>
  );
}
