
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/contactUs";
import React  from 'react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
