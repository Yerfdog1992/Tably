// SignUp.js
import React, { useState } from 'react';

function SignUp() {
  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here, such as sending a request to your server
    console.log('Sign-up submitted:', { username, email, password });
  };

  return (
    <div>
      <h2>Sign Up Page</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
