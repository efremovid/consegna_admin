import React from "react";
import styles from "./Form.module.scss";

const Form = ({ handleChange, addContainer, container }) => {
  return (
    <form onSubmit={addContainer} className={styles.container}>
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="name"
        value={container.name}
        placeholder="Наименование продукта"
      />
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="location"
        value={container.location}
        placeholder="Локация"
      />
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="price"
        value={container.price}
        placeholder="Цена"
      />
      <textarea
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="images"
        value={container.images}
        placeholder="Всавьте ссылки на изображения через запятую без пробелов"
      />
      <button className={styles.add} type="submit">
        Отправить заявку
      </button>
    </form>
  );
};

export default Form;
