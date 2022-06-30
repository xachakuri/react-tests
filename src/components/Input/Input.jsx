/* eslint-disable react/require-default-props */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Input.scss';

export const Input = ({
  onChange,
  type,
  value,
  className,
  theme = 'default',
  placeholder,
  onClick,
  register = () => null,
  name,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      value={value}
      className={clsx(styles.input, className, {
        [styles[`inputTheme_${theme}`]]: theme,
      })}
      {...register(name, {
        required: true,
      })}
      placeholder={placeholder}
      onClick={onClick}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  theme: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  register: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
};
