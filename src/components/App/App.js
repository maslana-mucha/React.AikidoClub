import React from 'react';
import styles from './App.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Timetable from '../Timetable/Timetable';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import MainLayout from '../MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/timetable" component={Timetable} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
