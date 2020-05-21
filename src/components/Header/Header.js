import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import Search from '../Search/SearchContainer';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo}>
              <Icon name={settings.headerIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
              <NavLink exact to="/FAQ" activeClassName="active">
                FAQ
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;