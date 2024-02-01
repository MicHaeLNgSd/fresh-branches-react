import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './FormikLabel.module.scss';

function FormikLabel(props) {
  const { type, name, ...rest } = props;
  return (
    <label>
      <div>
        <span>{name}</span>
        <Field type={type} name={name} {...rest} />
      </div>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
}

export default FormikLabel;
