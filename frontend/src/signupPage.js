import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpError, setSignUpError] = useState(false);

  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      // Client-side validation
      if (password !== confirmPassword) {
        window.alert("Passwords do not match.");
        return;
      }
  
      const userData = {
        name,
        email,
        phone,
        password,
      };
  
      const response = await axios.post('http://localhost:3000/signup', userData);
      console.log(response.data);
  
      // Show success alert
      window.alert('Sign-up successful!');
  
      // Assuming you want to navigate to a dashboard or profile page after successful sign-up
      const tokenResponse = await axios.post('http://localhost:3000/login', { email, password });
      const token = tokenResponse.data.token;
      localStorage.setItem('token', token);
      navigate(`/user/${email}`); // Change '/dashboard' to the desired route
  
    } catch (error) {
      console.error('Sign-Up error:', error);
  
      // Show error alert
      setSignUpError(true);
    }
  };
  

  return (
    <div className="container-fluid bg-dark py-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
        <div className="formContainer ">
        <h1>Get on Board</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputField"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="inputField"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="inputField"
          />
          <p className='my-2 privecy-alrt-para'>
            By creating an account, you agree to the <span className='signupunderline'>Terms and Use</span> and <span className='signupunderline'>Privacy Policy</span>
          </p>

          {signUpError && <p className="errorMessage">Sign-up failed. Please check your input and try again.</p>}
          
          <button onClick={handleSignUp} className="signupButton">
            Sign Up
          </button>
          <p className='text-center'>
            <span className='signupunderline   privecy-alrt-para'><Link to="/login"><span className='linkedsignuplogin'>I am already a member</span></Link></span>
          </p>
        </form>
      </div>
        </div>
      </div>

     
    </div>
  );
}

export default SignUpPage