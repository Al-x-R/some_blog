import React, { useState, useLayoutEffect, useCallback } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest, signUpRequest } from '../store/actions/authActionCreators';
import SignInForm from '../components/forms/SignIn';
import SignUpForm from '../components/forms/SignUp';
import useStyles from './authPageStyles';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState();
  const location = useLocation();
  const dispatch = useDispatch();

  const classes = useStyles();

  useLayoutEffect(() => {
    setIsLogin(location.pathname === '/signin');
  }, [location.pathname]);

  const handleSubmit = values => {
      dispatch(isLogin ? signInRequest(values) : signUpRequest(values));
    };

  const Form = isLogin ? SignInForm : SignUpForm;
  const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT';

  return (
    <div className={classes.main}>
      <h1>{pageTitle}</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default AuthPage;
