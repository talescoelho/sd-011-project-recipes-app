import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import '../styles/LoginPage.css';
import { setToken, emailPattern } from '../services/LoginFormAPI';
import LoginForm from '../components/LoginForm';

const magicNumber = 6;

export default function LoginPage() {
  const history = useHistory();
  const [isDisabled, setDisabled] = useState();
  const methods = useForm();

  const watchData = (email, password) => {
    if (password && password.length > magicNumber && email && emailPattern.test(email)) {
      setDisabled(true);
    }
  };

  const submitData = (data) => {
    setToken(data);
    history.push('/comidas');
  };

  useEffect(() => {
    watchData();
  }, [methods]);

  return (
    <FormProvider { ...{ methods, isDisabled, watchData, submitData } }>
      <LoginForm />
    </FormProvider>
  );
}
