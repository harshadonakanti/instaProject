import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");

    axios.post("http://localhost:3000/api/auth/register", {
      username,
      email,
      password,
    },{
      withCredentials:true
    })
    .then((res)=>console.log(res.data))
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
        >
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Enter the Username"
            name="username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter the Email"
            name="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter the Password"
            name="password"
          />
          <button>Register</button>
        </form>
        <p>
          Already Have An Account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterForm;
