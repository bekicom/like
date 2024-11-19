import { NavLink, useLocation, Navigate } from 'react-router-dom';
import styles from './footer.module.css';
import searchIcon from '../img/searchIcon.svg';
import searchIconActive from '../img/searchIcon-active.svg';
import diamond from '../img/diamond.svg';
import diamondActive from '../img/diamond-active.svg';
import like from '../img/like.svg';
import likeActive from '../img/like-active.svg';
import history from '../img/history.svg';
import historyActive from '../img/history-active.svg';

const Footer = () => {
  const location = useLocation();


  if (location.pathname === '/') {
    return <Navigate to="/reactjs-js-template/" replace />;
  }

  const navItems = [
    {
      activeIcon: searchIconActive,
      inactiveIcon: searchIcon,
      path: '/reactjs-js-template/',
      label: 'Search'
    },
    {
      activeIcon: historyActive,
      inactiveIcon: history,
      path: '/history',
      label: 'History'
    },
    {
      activeIcon: diamondActive,
      inactiveIcon: diamond,
      path: '/tarifs',
      label: 'Diamond'
    },
    {
      activeIcon: likeActive,
      inactiveIcon: like,
      path: '/heart',
      label: 'Heart'
    }
  ];

  return (
    <div className="main">
      <div className={styles.footer}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.footerButton} ${isActive ? styles.active : ''}`
            }
            style={({ isActive }) => ({
              background: 'none',
              border: 'none',
              opacity: isActive ? 1 : 0.5
            })}
          >
            <img
              src={location.pathname.startsWith(item.path) ? item.activeIcon : item.inactiveIcon}
              alt={item.label}
              className={styles.footerIcon}
              style={{ width: 24, height: 24 }}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Footer;
