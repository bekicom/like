import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to search page on initial load if at root
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/reactjs-js-template/');
    }
  }, []);

  const isActiveRoute = (itemPath) => {
    // Handle root path
    if (location.pathname === '/') {
      return itemPath === '/reactjs-js-template/';
    }

    // Handle empty path or just the base path
    if (location.pathname === '/reactjs-js-template/' || location.pathname === '/reactjs-js-template') {
      return itemPath === '/reactjs-js-template/';
    }

    if (itemPath === '/reactjs-js-template/') {
      return location.pathname === itemPath || location.pathname === '/';
    }
    
    if (itemPath === '/tarifs') {
      return location.pathname.startsWith('/tarifs') || location.pathname.includes('/payment');
    }
    
    if (itemPath === '/history') {
      return location.pathname.startsWith('/history') || location.pathname.includes('/profile');
    }
    
    return location.pathname.startsWith(itemPath);
  };

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
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`${styles.footerButton} ${isActiveRoute(item.path) ? styles.active : ''}`}
            style={{
              background: 0, 
              border: 0,
              opacity: isActiveRoute(item.path) ? 1 : 0.5
            }}
          >
            <img
              src={isActiveRoute(item.path) ? item.activeIcon : item.inactiveIcon}
              alt={item.label}
              className={styles.footerIcon}
              style={{ width: 24, height: 24 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Footer;