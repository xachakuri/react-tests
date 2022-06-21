import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.scss';

export const Button = ({
  children,
  onClick,
  type = 'button',
  theme = 'default',
  className,
}) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles[`buttonTheme_${theme}`]]: theme,
      })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
};
