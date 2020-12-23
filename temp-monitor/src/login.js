import React from 'react';
import './login.css';

const login = () => {

    const loginButton = () => {}
    return (
        <div className="login">
          <p className="auth__loginPara">Login Request</p>
          <form className="auth__login">
              <label>Email</label>
            <input id="email" type="email" placeholder="Please enter email" />
            <label>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
            />
            
            <button className="login__button" onClick={loginButton}>Login</button>
          </form>
        </div>
    )
}

export default login;