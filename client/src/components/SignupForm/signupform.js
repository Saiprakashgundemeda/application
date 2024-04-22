import { useState } from 'react'
import React from 'react'
import './signupform.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { username, email, password })
            .then((res) => {
                console.log(res)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='signup-form-container'>
            <h1 className='m-2 text-primary'>Register</h1>
            <form className="form-container bg-light text-primary" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="m-2 text-center">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>

                <div>
                    <p>Already have an account? <Link to="/login"><span className="text-primary">Login</span></Link></p>
                </div>

            </form>
        </div>
    )
}

export default SignupForm
