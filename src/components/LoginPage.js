import React, { useState } from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleLogin = (credentials) => {
    const { username, password } = credentials;

    // Check the username and password
    if (username === 'Admin' && password === '12345') {
      // Successful login - redirect to the admin page
      window.location.replace('/Admin');
    } else {
      // Invalid credentials - display an error
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2>Login to Admin Panel</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
