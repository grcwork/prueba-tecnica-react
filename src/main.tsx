import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import Index from "./routes/index.tsx";
import Book from "./routes/book.tsx";
import Favorites from "./routes/favorites.tsx";
import NotFound from "./routes/not-found.tsx";
import Form from "./routes/form.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/books/:id",
        element: <Book />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/add-book",
        element: <Form />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
