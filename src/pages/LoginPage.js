// src/components/LoginPage.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import "../css/pages/LoginPage";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if both fields are provided
    if (username === '' || password === '') {
      setError('Please fill in both fields.');
    } else {
      setError('');
      // Handle successful login (e.g., authentication logic here)
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          {/* Username Field */}
          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" block>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
