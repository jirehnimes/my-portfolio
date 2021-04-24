import * as PropTypes from 'prop-types';
import * as React from 'react';

import SocialMedia from 'components/common/social-media';

import * as styles from './footer.module.scss';

const Footer = ({location}) => {
  const isIndexSocialMedia = !!!location ? styles.socialMedia : '';

  return (
    <footer className={styles.footer}>
      <div className={isIndexSocialMedia}>
        <SocialMedia/>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  location: PropTypes.any,
};

export default Footer;
