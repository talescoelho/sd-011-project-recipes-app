import { useEffect, useState } from 'react';

export default function useLoginForm() {
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const { email, password } = data;
    const validEmail = /^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/;
    const validPassword = 6;
    if (validEmail.test(email) && password.length > validPassword) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [data]);

  function handleChange({ target: { name, value } }) {
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit() {
    localStorage.setItem('user', JSON.stringify({ email: data.email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    setRedirect(true);
  }

  return [redirect, valid, handleChange, handleSubmit];
}
