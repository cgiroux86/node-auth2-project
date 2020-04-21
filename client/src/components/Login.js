import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", input)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/users");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>username</label>
      <input onChange={handleChange} name="username"></input>
      <label>password</label>
      <input onChange={handleChange} name="password" type="password"></input>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;
