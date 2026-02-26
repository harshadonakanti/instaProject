import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import "./features/shared/global.scss";
import AuthContextProvider from "./features/auth/auth.context";
import PostConextProvider from "./features/posts/post.context";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <PostConextProvider>
          <RouterProvider router={router} />
        </PostConextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
