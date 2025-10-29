import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import Form from "../../components/Form/Form";
import Cards from "../../components/Cards/Cards";
import axios from "axios";
import Preloader from "../../components/Preloader/Preloader";

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [container, setContainer] = useState({
    name: "",
    location: "",
    price: "",
    images: "",
  });

  const handleChange = (e) => {
    setContainer({ ...container, [e.target.name]: e.target.value });
  };

  const addContainer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://6862c75696f0cc4e34baf165.mockapi.io/containers",
        container,
        { headers: { "Content-Type": "application/json" } }
      );
      setData([...data, response.data]);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    }
    setContainer({
      name: "",
      location: "",
      price: "",
      images: "",
    });
  };

  const deleteApp = async (id) => {
    try {
      await axios.delete(
        `https://6862c75696f0cc4e34baf165.mockapi.io/containers/${id}`
      );
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://6862c75696f0cc4e34baf165.mockapi.io/containers")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Ошибка загрузки:", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <Form
        addContainer={addContainer}
        handleChange={handleChange}
        container={container}
      />
      {isLoading ? (
        <Preloader />
      ) : data.length === 0 ? (
        <p className={styles.text}>В настоящее время ничего не продаётся</p>
      ) : (
        <Cards data={data} deleteApp={deleteApp} />
      )}
    </div>
  );
};

export default Main;
