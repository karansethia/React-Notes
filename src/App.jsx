import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "@/User/Pages/RootLayout";
import NoteDash from "@/User/Pages/NoteDash";
import Newnote from "@/User/Pages/NewNote";
import Home from "@/Home/Pages/Home";
import HomeLayout from "@/Home/HomeLayout";
import Login from "@/Home/Pages/Login";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {index: true, element: <Home />},
      {path: "/login", element: <Login />},
    ],
  },
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default App;
