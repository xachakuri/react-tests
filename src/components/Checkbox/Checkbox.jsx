/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.scss';

export const Checkbox = ({
  children,
  onChange,
  checked,
  text,
  register = () => null,
  name,
}) => {
  return (
    <label className={styles.checkboxLabel}>
      {text}
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...register(name, {
          required: true,
        })}
      />
      <span className={styles.checkbox} />
      {children}
    </label>
  );
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  children: PropTypes.node,
  text: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
};
