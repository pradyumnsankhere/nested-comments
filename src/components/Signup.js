import React, { useState } from "react";
import { TextField, Button, Container, Typography, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

const LoginSignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser?.username === username &&
        storedUser?.password === password
      ) {
        dispatch(setUser(storedUser));
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } else {
      const newUser = { username, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      handleToggle();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4">{isLogin ? "Login" : "Sign Up"}</Typography>
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
          onChange={(e) => setUsername(e.target.value)}
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
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Typography>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link onClick={handleToggle}>{isLogin ? "Sign up" : "Login"}</Link>
      </Typography>
    </Container>
  );
};

export default LoginSignupForm;
