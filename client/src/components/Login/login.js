import React from 'react'
import './login.css'

const login = () => {
  return (
    <div className='login-page-container'>
      <form className='login-form'>
        <h1 className='text-center m-5 text-primary'>Login</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control w-100" id="exampleInputPassword1"/>
        </div>
        <div className='text-center'>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        
        </form>
    </div>
  )
}

export default login
