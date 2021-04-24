import * as React from 'react';

import * as styles from './theme-toggle.module.scss';

const ThemeToggle = () => {
  return (
    <div className={styles.themeToggle}>
      <label className={styles.toggle}>
        <input type="checkbox"/>
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
