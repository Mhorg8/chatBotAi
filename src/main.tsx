import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <App /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
