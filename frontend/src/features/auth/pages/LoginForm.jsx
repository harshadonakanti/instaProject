import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <p>loading.....</p>;
  }
  function handlerSubmit(e) {
    e.preventDefault();

    handleLogin(username, password).then((res) => {
      navigate("/");
    });

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
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter the Password"
            name="password"
            required
          />
          <button>Login</button>
        </form>
        <p>
          Don't Have An Account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Create an Account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginForm;
