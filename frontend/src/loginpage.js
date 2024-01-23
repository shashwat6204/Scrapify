import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false); // State to track sign-in error

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      navigate(`/user/${response.data.usn}`);

    } catch (error) {
      console.error('Login error:', error);
      setLoginError(true);
    }
  };

  return (
    <div className="container-fluid bg-dark py-5">
       <div className="row justify-content-center">
        <div className="col-md-12"></div>
      <div className="formContainer">
        <h1 className='text-white'>Welcome to Scrapify</h1>
        <h2 className='text-white'>Login to your account</h2>

        <form className="form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
          <p className='my-2 privecy-alrt-para'>
             <span className='signupunderline'>Forgot your password?</span>
          </p>

          {loginError && <p className="errorMessage">Invalid credentials</p>}

          <button
            onClick={handleLogin}
            className="loginButton
            signupButton"
          >
             Login
          </button>
          <p className='text-center privecy-alrt-para'>New here 
  <span className='signupunderline   privecy-alrt-para mx-2'>
    <Link to="/signup"><span className='linkedsignuplogin'>Sign Up instead</span></Link>
  </span>
</p>

        </form>
      </div>
</div>
      </div>
      
    
  );
}

export default LoginPage;