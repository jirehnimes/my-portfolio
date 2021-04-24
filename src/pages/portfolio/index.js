import * as React from 'react';

import Layout from 'components/common/layout';
import * as PropTypes from 'prop-types';

const PortfolioPage = ({location}) => {
  return (
    <Layout location={location}>
    </Layout>
  );
};

PortfolioPage.propTypes = {
  location: PropTypes.object,
};

export default PortfolioPage;
