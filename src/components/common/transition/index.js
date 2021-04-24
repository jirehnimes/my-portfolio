import React, {useState, useEffect} from 'react';

import * as styles from './transition.module.scss';

const COUNT = 5;

const Transition = () => {
  const [animate, setAnimate] = useState(false);

  const blinds = Array.from(Array(COUNT).keys()).map((value) =>
    <div
      key={value}
      className={`
        ${styles.transition}
        ${animate ? styles.transition__animate : ''}
      `}
    />,
  );

  useEffect(() => {
    setAnimate(true);
  });

  return (
    <>
      <div
        className={`
          ${styles.container}
          ${animate ? styles.container__animate : ''}
        `}
      />
      {blinds}
    </>
  );
};

export default Transition;
