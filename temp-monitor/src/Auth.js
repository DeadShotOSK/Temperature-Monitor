import React from 'react';
import Signup from './signup';
import Login from './login';
import './auth.css';

const auth = () => {
    return (
      <div className="auth">
        <div className="auth__heading">
          <p className="heading">Real-Time Temperature Monitoring System</p>
        </div>
        <div className="auth__contant">
          <Signup />
          <Login />
        </div>
      </div>
    );
}

export default auth;