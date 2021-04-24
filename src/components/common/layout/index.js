import * as PropTypes from 'prop-types';
import * as React from 'react';

// import Footer from 'components/common/footer';
import Navigation from 'components/common/navigation';
// import ThemeToggle from 'components/common/theme-toggle';
import SocialMedia from 'components/common/social-media';
import Transition from 'components/common/transition';

const Layout = ({children}) => {
  return (
    <>
      <Transition/>
      <Navigation/>
      {children}
      <SocialMedia/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
