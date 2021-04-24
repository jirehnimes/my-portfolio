import PropTypes from 'prop-types';
import * as React from 'react';

const Button = ({children, href}) => {
  const button = <button>
    <div>
      {children}
    </div>
  </button>;

  if (!!href === true) {
    return (
      <div className="button">
        <a href={href} target="_blank" rel="noreferrer">
          {button}
        </a>
      </div>
    );
  }

  return (
    <div className="button">
      {button}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
};

export default Button;
