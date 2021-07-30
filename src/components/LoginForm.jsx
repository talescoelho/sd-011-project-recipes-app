import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';

export default function LoginForm() {
  const { methods, isDisabled, submitData, watchData } = useFormContext();
  const { handleSubmit, register, watch } = methods;
  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    watchData(email, password);
  }, [watchData, email, password]);

  return (
    <Form>
      <Container>
        <Form onSubmit={ handleSubmit(submitData) }>
          <h3 className="text-center text-info">Login</h3>
          <Form.Group classNameName="mt-2">
            <Form.Label className="text-info">E-mail:</Form.Label>
            <Form.Control
              data-testid="email-input"
              type="text"
              { ...register('email') }
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label className="text-info">Password:</Form.Label>
            <Form.Control
              data-testid="password-input"
              type="password"
              { ...register('password') }
            />
          </Form.Group>
          <Form.Group className="d-grid gap-2 mt-3">
            <Button
              disabled={ !isDisabled }
              data-testid="login-submit-btn"
              type="submit"
              variant="primary"
              size="lg"
            >
              Entrar
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </Form>
  );
}
