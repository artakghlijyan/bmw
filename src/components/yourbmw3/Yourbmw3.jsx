import React from 'react'
import styles from "./Yourbmw3.module.css"
import axjik from "../../components/yourbmw3/bmwaxjik.webp"

const Yourbmw3 = () => {
  return (
    <div>
      <div className={styles.yourbmw3}>
        <div className={styles.you3}>
          <img className={styles.axjik} src={axjik} alt="" />
        </div>
        <div className={styles.you4}>
          <div className={styles.vernagir}>
            <span>МАГАЗИН АКСЕССУАРОВ BMW</span>
            <h1 className={styles.hashvark}>
              ОТКРОЙТЕ ДЛЯ СЕБЯ МИР АКСЕССУАРОВ BMW.
            </h1>
            <p>
              Оригинальные аксессуары для вашей семьи и вашего автомобиля BMW.{" "}
            </p>
            <a className={styles.hreqar} href="">
              Перейти в магазин
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yourbmw3