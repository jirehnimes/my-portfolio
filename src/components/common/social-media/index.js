import * as React from 'react';

import * as styles from './social-media.module.scss';

import socialMediaList from './social-media-list.json';
import * as svgImages from 'static/images/social-media/svg-images';

const SocialMedia = () => {
  const socialMediaElements = socialMediaList.map((socialMedia, index) =>
    <li key={index} className={styles.socialMedia}>
      <a href={socialMedia.link} target="_blank" rel="noreferrer">
        <div>
          <div className={styles.socialMedia__hovered}/>
          <div className={styles.socialMedia__icon}>
            {React.createElement(svgImages[socialMedia.component])}
          </div>
          <div className={styles.socialMedia__name}>
            {socialMedia.name}
          </div>
        </div>
      </a>
    </li>,
  );

  return (
    <div className={styles.socialMediaList__wrapper}>
      <ul className={styles.socialMediaList}>
        {socialMediaElements}
      </ul>
    </div>
  );
};

export default SocialMedia;
