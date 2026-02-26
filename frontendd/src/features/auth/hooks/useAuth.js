import { use, useContext } from "react";
import { authContext } from "../auth.context";
import { getMe, loginApi, registerApi } from "../services/auth.api";

const useAuth = () => {
  const data = useContext(authContext);
  const { user, setUser, loading, setLoading } = data;

  const handleLogin = async (username, password) => {
    setLoading(true);

    try {
      const res = await loginApi(username, password);
      setUser(res.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    try {
      const res = await registerApi(username, email, password);
      setUser(res.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return{
    user, loading, handleLogin, handleRegister
  }
};

export default useAuth;
