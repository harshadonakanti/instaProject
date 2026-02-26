import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username, password);

    navigate("/");
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              value={username}
              placeholder="Enter the Username/Email"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Enter the Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn primary-btn">Login</button>
          </form>

          <p>
            Don't Have an Account?{" "}
            <Link className="toggleAuthForm" to="/register">
              Register{" "}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
