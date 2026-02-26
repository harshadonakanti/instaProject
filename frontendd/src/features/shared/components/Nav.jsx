import { useNavigate } from "react-router";
import "../nav.scss";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <h1>Intexsy</h1>
      <button
        className="btn primary-btn"
        onClick={() => {
          navigate("/create-post");
        }}
      >
        New Post
      </button>
    </nav>
  );
};

export default Nav;
