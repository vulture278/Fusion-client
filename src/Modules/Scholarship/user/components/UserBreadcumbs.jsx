import { NavLink } from 'react-router-dom';
import styles from './UserBreadcumbs.module.css'; 
import { CaretRight } from '@phosphor-icons/react';

const UserBreadcumbs = () => {
  return (
    <div className={styles.ctr}>
      <NavLink
        to="/scholarship"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        Catalog
      </NavLink>
      <div className={styles.caret}>
        <CaretRight />
      </div>
      <NavLink
        to="/user/browseApplication"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        Browse Application
      </NavLink>
      <div className={styles.caret}>
        <CaretRight />
      </div>
      <NavLink
        to="/user/scholarshipStatus"
        className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
      >
        Scholarship Status
      </NavLink>
    </div>
  );
};

export default UserBreadcumbs;
