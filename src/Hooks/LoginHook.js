import { useEffect, useState } from 'react';

function ManageLogin() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (login.email && login.password) {
      setLogin({
        email: '',
        password: '',
      });
    }
  }, [login]);

  return [login, setLogin];
}

export default ManageLogin;
