import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1 className="title--wave">
        <span style={{ "--item": 1 }}>R</span>
        <span style={{ "--item": 2 }}>E</span>
        <span style={{ "--item": 3 }}>G</span>
        <span style={{ "--item": 4 }}>I</span>
        <span style={{ "--item": 5 }}>S</span>
        <span style={{ "--item": 6 }}>T</span>
        <span style={{ "--item": 7 }}>E</span>
        <span style={{ "--item": 8 }}>R</span>
      </h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>Error message here</p>
        <span>
          <Link to="/login" className="register--link">
            Already have an account? <br />
            Login here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
