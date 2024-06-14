import React from 'react'
import Feet from '../../common/Feet'
import './Login.css'


const Login = () => {
  return (
    <div>
    <div className="container">
      <div className="image-container">
        <img src="https://via.placeholder.com/400" alt="Login" />
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    <Feet/>
    </div>
  )
}

export default Login