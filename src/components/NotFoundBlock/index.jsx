import React from 'react';
import styles from './styles.module.scss';

export default function NotFoundBlock() {
  return (
    <div className={styles.main}>

      <h1>
        <span>
          &#9785;
        </span>

        <br />
        404 NOT FOUND
      </h1>
      <p className={styles.description}>
        Данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>

  );
}
