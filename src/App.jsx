import React from "react";
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./User/Pages/RootLayout";
import NoteDash from "./User/Pages/NoteDash";
import Newnote from "./User/Pages/NewNote";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <RootLayout />,
    children: [
      {index: true, element: <NoteDash />},
      {path: ":noteId", element: <Newnote />},
      {path: "new", element: <Newnote />},
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
