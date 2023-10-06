import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import Category from "../Pages/Category/Category";
import Error from "../Pages/Error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <NewsDetails></NewsDetails>,
          </PrivateRoutes>
        ),
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "category/:id",
        element: <Category></Category>,
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default routes;
