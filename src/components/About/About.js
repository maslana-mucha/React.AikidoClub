import React from 'react';
import styles from './About.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { about } from '../../data/dataStore';

const About = () => (
  <Container>
    <section className={styles.component}>
      <Hero title={about.title} image={about.image} altImage={about.altImage} />
      <div className={styles.description}>{about.description}</div>
      <div>
        <p>{about.context}</p>
      </div>
    </section>
  </Container>
);

export default About;
