import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1 className="title--wave">
        <span style={{ "--item": 1 }}>L</span>
        <span style={{ "--item": 2 }}>O</span>
        <span style={{ "--item": 3 }}>G</span>
        <span style={{ "--item": 4 }}>I</span>
        <span style={{ "--item": 5 }}>N</span>
      </h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>Error message here</p>
        <span>
          <Link to='/register' className="register--link">Don't have an account? <br/>Register here</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
