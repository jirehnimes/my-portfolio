import * as React from 'react';

import * as styles from './index.module.scss';

import Button from 'components/common/button';
import Layout from 'components/common/layout';

// eslint-disable-next-line max-len
import socialMediaList from 'components/common/social-media/social-media-list.json';

const IndexPage = () => {
  const linkedIn = socialMediaList.find((socialMedia) =>
    socialMedia.name === 'LinkedIn',
  );

  return (
    <Layout>
      <div className={`${styles.index}`}>
        <div className={styles.index__main}>
          <div className={styles.index__title}>
            <div className={styles.index__name}>
              <h1>JIREH</h1>
              <h1>NIMES</h1>
            </div>
            <div className={styles.index__role}>
              <h3>Developer</h3>
            </div>
          </div>
          <div className={styles.index__image}>
            <img src="/images/index/me1.png" alt="Me"/>
          </div>
        </div>
        <div className={styles.index__description}>
          <div>
            <p>
              A Sr. Web Developer in a Korean<br/>e-commerce company based in
              <br/>Philippines with 4 years of experience <br/>in web development.
            </p>
            <p>
              I'm open to accept freelance or<br/>part-time projects.
            </p>
            <div className={styles.button}>
              <Button href={linkedIn.link}>
                CONTACT ME
              </Button>
            </div>
            <div className={styles.button}>
              <Button href={linkedIn.link}>
                HIRE ME!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
