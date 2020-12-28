import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import useStyles from './styles';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const passwordRule = [
  /(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])^.{8,255}$/,
  'Your password must be at least 8 characters, and include at least one uppercase letter, and a number. ',
];

const validationSchema = Yup.object({
  name: Yup.string().trim().required(),
  email: Yup.string().trim().email().required(),
  password: Yup.string().matches(...passwordRule).required(),
});

const SignUpForm = (props) => {
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
            name="name"
            type="text"
            label="Name"
            variant="outlined"
          />
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
          <p>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></p>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
