import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
