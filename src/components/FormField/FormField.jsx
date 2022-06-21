import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.scss';

export const FormField = ({ label, children, errors }) => {
  return (
    <div className={styles.containerFormField}>
      <label className={styles.labelModal}>{label}</label>
      {children}
      <div className={styles.errorBlock}>
        <p>{errors}</p>
      </div>
    </div>
  );
};
FormField.propTypes = {
  errors: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};
