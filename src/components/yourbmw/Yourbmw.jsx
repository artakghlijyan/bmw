import React from 'react'
import styles from "./Yourbmw.module.css"
import kluch from "../../components/yourbmw/kluch.webp"
import avto from "../../components/yourbmw/poiskavto.webp"
import person from "../../components/yourbmw/personavto.webp"

const Yourbmw = () => {
  return (
    <div>
      <div className={styles.your}>
        <div className={styles.yourbmw}>
          <span>ВАШ BMW</span>
        </div>
        <div className={styles.yourbmw1}>
          <h1>ВЫБЕРИТЕ ДЛЯ СЕБЯ </h1>
        </div>
        <div className={styles.yourbmw2}>
          <div className={styles.toxerov1}>
            <img className={styles.kluch} src={kluch} alt="" />
            <img className={styles.kluch} src={avto} alt="" />
            <img className={styles.kluch} src={person} alt="" />
          </div>
          <div className={styles.toxerov2}>
            <span>Запись на сервис</span>
            <span>Автомобили с пробегом</span>
            <span>Дилер BMW</span>
          </div>
          <div className={styles.toxerov}>
            <a
              className={styles.padrob}
              href="https://www.bmw.ru/ru/ssl/forms/service_sign.html"
            >
              Подробнee
            </a>
            <a
              className={styles.padrob}
              href=""
            >
              Найти сейчас
            </a>
            <a
              className={styles.padrob}
              href=""
            >
              Подробнee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yourbmw