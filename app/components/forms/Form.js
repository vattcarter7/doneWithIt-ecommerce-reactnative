import React, { Fragment } from 'react';
import { Formik } from 'formik';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
}

export default AppForm;
