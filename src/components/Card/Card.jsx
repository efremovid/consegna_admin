import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import Slider from "../Slider/Slider";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ container, deleteApp }) => {
  const images = container.images.split(",");

  return (
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.main}>
          <p>Название: {container.name}</p>
          <p>Цена: {container.price}</p>
        </div>
        <button onClick={() => deleteApp(container.id)}>
          <MdDeleteForever className={styles.del} />
        </button>
      </div>
      {images.length === 0 ? (
        <p>Изображения отсутствуют</p>
      ) : (
        <Slider images={images} />
      )}
    </div>
  );
};

export default Card;
