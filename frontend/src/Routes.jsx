import { Route, Routes } from "react-router";
import LoginForm from "./features/auth/pages/LoginForm";
import RegisterForm from "./features/auth/pages/RegisterForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>This is homepage </h1>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default AppRoutes;
