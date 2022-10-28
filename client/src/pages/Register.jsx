import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register/", inputs);
      console.log(res);
    } catch (err) {
      console.log('errrrrr--->>>>', err)
    }
  }; 

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
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {/* {err && <p>{err}</p>} */}
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
