import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              <Icon name={settings.headerIcon} />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Główna
              </NavLink>
              <NavLink exact to="/about" activeClassName="active">
                O nas
              </NavLink>
              <NavLink exact to="/timetable" activeClassName="active">
                Grafik
              </NavLink>
              <NavLink exact to="/gallery" activeClassName="active">
                Galeria
              </NavLink>
              <NavLink exact to="/contact" activeClassName="active">
                Kontakt
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
