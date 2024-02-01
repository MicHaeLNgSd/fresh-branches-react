import React from 'react';
import { Formik, Form } from 'formik';
import { REG_VALIDATION_SCHEMA } from '../../utils/schemes';
import FormikLabel from '../FormikLabel';
import styles from './RegForm.module.scss';

const DEFAULT_VALS = {
  login: '',
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPass: '',
  dateOfBirth: '',
};

const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};

function RegForm() {
  return (
    <Formik
      initialValues={DEFAULT_VALS}
      onSubmit={handleSubmit}
      validationSchema={REG_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <FormikLabel type="text" name="login" autoFocus />
        <FormikLabel type="text" name="name" />
        <FormikLabel type="text" name="surname" />
        <FormikLabel type="email" name="email" />
        <FormikLabel type="password" name="password" />
        <FormikLabel type="password" name="confirmPass" />
        <FormikLabel type="date" name="dateOfBirth" />
        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </Form>
    </Formik>
  );
}

export default RegForm;
