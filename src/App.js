import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Login = React.lazy(() => import("../src/pages/Login"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <React.Suspense fallback={<div>is Loading..</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
