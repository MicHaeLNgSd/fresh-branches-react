import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              exact
              to="/"
              className={styles.navItem}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/reg" className={styles.navItem} activeClassName={styles.active}>
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
