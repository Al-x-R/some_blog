import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import useStyles from './styles';

const initialValues = {
  email: 'email@gmail.com',
  password: 'Test1234',
};

const passwordRule = [
  /(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])^.{8,255}$/,
  'Your password must be at least 8 characters, and include at least one uppercase letter, and a number. ',
];

const validationSchema = Yup.object({
  email: Yup.string().trim().email().required(),
  password: Yup.string().matches(...passwordRule).required(),
});

const SignInForm = (props) => {
  const { onSubmit } = props;
  const classes = useStyles();

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
      {({ submitForm, isSubmitting }) => (
        <Form className={classes.root}>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
            variant="outlined"
          />
          <Field
            id="outlined-password-input"
            component={TextField}
            type="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
          <p>Don`t have an account? <Link to='/signup' style={{ textDecoration: 'none' }}>Register</Link></p>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
