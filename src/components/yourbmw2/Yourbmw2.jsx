import React from 'react'
import styles from "./Yourbmw2.module.css"
import mnogo from "../../components/yourbmw2/mnogobmw.jpeg"


const Yourbmw2 = () => {
  return (
    <div>
      <a
        href=""
        className={styles.your2}
      >
        <div className={styles.position}>
          <div className={styles.pos1}>
            <span>Автомобили с пробегом</span>
          </div>
          <div className={styles.pos2}>
            <h1>BMW с пробегом B </h1>
          </div>
          <div className={styles.pos3}>
            <h1>Наличии</h1>
          </div>
          <div className={styles.pos4}>
            <a
              className={styles.klorhref}
              href=""
            >
              Узнать больше
            </a>
          </div>
        </div>
        <img width={"100%"} src={mnogo} alt="" />
      </a>
    </div>
  );
}

export default Yourbmw2