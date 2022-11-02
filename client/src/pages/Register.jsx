import React, { useCallback } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";

const Register = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onInputValidate = (value, name) => {
    setError((prev) => ({
      ...prev,
      [name]: { ...prev[name], errorMsg: value },
    }));
  };

  //vallidations from backend
  const [err, setErr] = useState(null);

  //input validations
  const [error, setError] = useState({
    username: {
      isReq: true,
      errorMsg: "",
      onValidateFunc: onInputValidate,
    },
    email: {
      isReq: true,
      reqType: "EMAIL",
      errorMsg: "",
      onValidateFunc: onInputValidate,
    },
    password: {
      isReq: true,
      errorMsg: "",
      onValidateFunc: onInputValidate,
    },
  });

  const onInputChange = useCallback((value, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const validateForm = () => {
    let isInvalid = false;
    Object.keys(error).forEach((x) => {
      const errObj = error[x];
      if (errObj.errorMsg) {
        isInvalid = true;
      } else if (errObj.isReq && !form[x]) {
        isInvalid = true;
        onInputValidate(true, x);
      }
    });
    return !isInvalid;
  };

  const handleSubmit = async () => {

    const isValid = validateForm();
    if (!isValid) {
      console.log("Invalid Form!", error);
      return false;
    }
    try{
      await axios.post("/auth/register/", form);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data)
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

      <div className="form">
        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          max={14}
          onChangeFunc={onInputChange}
          {...error.username}
        />
        <Input
          name="email"
          placeholder="Email"
          value={form.email}
          onChangeFunc={onInputChange}
          {...error.email}
        />
        <Input
          name="password"
          placeholder="Password"
          value={form.password}
          min={6}
          onChangeFunc={onInputChange}
          {...error.password}
        />
        <button onClick={handleSubmit}>Submit</button>
        {err && <p>{err}</p>}
        <span>
          <Link to="/login" className="register--link">
            Already have an account? <br />
            Login here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
