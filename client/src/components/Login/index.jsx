import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './styles.scss';

export default function Login() {
  const [showRegister, setShowRegister] = useState(false);

  const LoginComponent = !showRegister ? <LoginForm /> : null;
  const RegisterComponent = showRegister ? <RegisterForm /> : null;
  const text = !showRegister ? 'Registrate' : 'Iniciar sesión';

  return (
    <div className="login">
      {LoginComponent}
      {RegisterComponent}
      <div className="link" onClick={() => setShowRegister(!showRegister)}>
        {text}
      </div>
    </div>
  );
}
