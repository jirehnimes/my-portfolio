import {Link} from 'gatsby';
import * as React from 'react';

import * as styles from './navigation.module.scss';

import navigationList from './navigation-list.json';

const Navigation = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  const links = navigationList.map((navigation, index) => {
    return (
      <div
        key={index}
        className={styles.link}
      >
        <div>
          <div className={styles.linkHovered}/>
          <Link to={navigation.link}>
            {navigation.title}
          </Link>
        </div>
      </div>
    );
  });

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.navigation}>
      <div className="content-center">
        <div className={styles.wrapper}>
          <div className={styles.bar}>
            <div className={styles.brand}>
              <Link to="/">
                <img src="/images/logo.png" alt="Jireh Nimes"/>
              </Link>
            </div>

            <div
              className={styles.toggle}
              onClick={toggleLinks}
            >
              <img
                src="/images/hamburger.png"
                className={styles.hamburger}
                alt="Hamburger"
              />
            </div>
          </div>

          <div
            className={`
              ${styles.links}
              ${showLinks ? styles.linksVisible : ''}
            `}
          >
            <div
              className={styles.toggle}
              onClick={toggleLinks}
            >
              X
            </div>
            <div className={styles.linksWrapper}>
              {links}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
