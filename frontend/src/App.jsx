import AppRoutes from "./routes";
import "./style.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { BrowserRouter } from "react-router";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
