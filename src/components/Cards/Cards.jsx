import React from "react";
import styles from "./Cards.module.scss";
import Card from "../Card/Card";

const Cards = ({ data , deleteApp}) => {
  return (
    <div className={styles.container}>
      {data.map((el, index) => (
        <Card key={index} container={el} deleteApp={deleteApp}/>
      ))}
    </div>
  );
};

export default Cards;
