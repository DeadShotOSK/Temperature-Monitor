import React from 'react';
import './signup.css';

const signup = () => {

    const signupButton = () => {}
    return (
        <div className="signup">
          <p className="auth__signupPara">Sign Up Request</p>
          <form className="auth__signup">
              <label>Name</label>
            <input id="name" type="text" placeholder="Please enter full name" />
            <label>Email</label>
            <input id="email" type="email" placeholder="Please provide email" />
            <label>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create Password"
            />

            <button className="signup__button" onClick={signupButton}>Sign Up</button>
          </form>
        </div>
    )
}

export default signup;