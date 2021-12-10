import React from 'react';
import { Formik } from 'formik';

const AppForm = ({ initialValues, onSubmit, children, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>{children}</form>
        </>
      )}
    </Formik>
  );
};

export default AppForm;
