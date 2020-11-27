import React from 'react';
import styles from './Timetable.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { timetable } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Timetable = () => (
  <Container>
    <section className={styles.component}>
      <Hero
        title={timetable.title}
        image={timetable.image}
        altImage={timetable.altImage}
      />
      <div className={styles.description}>
        {ReactHtmlParser(timetable.description)}
      </div>
      <div>
        <p>{timetable.context}</p>
      </div>
    </section>
  </Container>
);

export default Timetable;
