import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  interface IUser {
    status: string;
    user?: string;
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    setEmail('');
    setPassword('');
    const data: Promise<IUser> = await response.json();
    if ((await data).user) {
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Please check your username and password');
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
