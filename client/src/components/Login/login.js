import React, { useState } from 'react'; // Import React
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='login-page-container'>
      <form className='login-form-container' onSubmit={handleSubmit}>
        <h1 className='text-center m-5 text-primary'>Login</h1>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control w-100'
            id='exampleInputPassword1'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='text-center'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
        <p className='m-2'>
          Don't have an account ? <Link to='/signupform'> Signup </Link>
        </p>
      </form>
    </div>
  );
};

export default Login; 
