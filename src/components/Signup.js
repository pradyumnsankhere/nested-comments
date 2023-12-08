// LoginSignupForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';

const LoginSignupForm = ({setAuthenticated}) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setusername("")
setPassword("")

    setError(''); // Clear any previous errors when toggling between login/signup
  };

 const handleFormSubmit = (e) => {
  e.preventDefault();

  if (isLogin) {
    // Login logic
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Stored User:', storedUser);

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setAuthenticated(true);
    } else {
      setError('Invalid username or password. Please try again.');
    }
  } else {
    // Signup logic
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));

    console.log('User Signed Up:', newUser);
    // setAuthenticated(true);
  }
};

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4">{isLogin ? 'Login' : 'Sign Up'}</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="User Name"
          type="text"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </form>
      <Typography>
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link href="#" onClick={handleToggle}>
          {isLogin ? 'Sign up' : 'Login'}
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginSignupForm;
