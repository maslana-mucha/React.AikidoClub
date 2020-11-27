import React from 'react';
import styles from './Home.scss';
import { settings } from '../../data/dataStore';

class Home extends React.Component {
  render() {
    // console.log(this);
    const { title, subtitle } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </main>
    );
  }
}

export default Home;
