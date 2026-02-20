import "../styles/form.scss";
import { Link } from "react-router";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:3000/api/auth/login',{
      username,
      password
    },{
      withCredentials:true
    })

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter the Username"
            name="username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter the Password"
            name="password"
          />
          <button>Login</button>
        </form>
        <p>
          Don't Have An Account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;
