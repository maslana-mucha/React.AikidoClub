import React from 'react';
import styles from './Hero.scss';

const Hero = (props) => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.title}</h2>
    <img className={styles.image} src={props.image} alt={props.altImage} />
  </header>
);

export default Hero;
