import { React } from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/LoginPage.scss';

export default function LoginPage() {
  return (
    <div className="login-page">
      <h2>Sign in to FE-02</h2>
      <LoginForm />
    </div>
  );
}
