import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LoadingSpinner from "./shared/LoadingSpinner";

//import Login from "./pages/Auth/Login";
//import Dashboard from "./pages/Dashboard";
//import Register from "./pages/Auth/Register";
//import Home from "./pages/Home";
//import ProductList from "./components/dashboard/ProductList";
//import AddProduct from "./components/dashboard/AddProduct";
//import UserProfile from "./components/dashboard/UserProfile";
//import ShowProduct from "./components/dashboard/ShowProduct";
//import EditProduct from "./components/dashboard/EditProduct";
//import Products from "./pages/Products";
//import MainProductList from "./components/MainProductList";

const Login = React.lazy(() => import("./pages/Auth/Login"));
const Activation = React.lazy(() => import("./pages/Auth/Activation"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const AddProduct = React.lazy(() =>
  import("./components/dashboard/AddProduct")
);
const ProductList = React.lazy(() =>
  import("./components/dashboard/ProductList")
);
const UserProfile = React.lazy(() =>
  import("./components/dashboard/UserProfile")
);
const ShowProduct = React.lazy(() =>
  import("./components/dashboard/ShowProduct")
);
const EditProduct = React.lazy(() =>
  import("./components/dashboard/EditProduct")
);
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const MainProductList = React.lazy(() =>
  import("./components/MainProductList")
);


function App() {
  let routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/bejelentkezes", element: <Login /> },
    { path: "/regisztracio", element: <Register /> },
    { path: "/activation/:uuid", element: <Activation />},
    {
      path: "/hirdetesek",
      element: <Products />,
      children: [
        { path: "", element: <MainProductList /> },
        { path: ":uuid", element: <ShowProduct /> },
      ],
    },
    {
      path: "/kezelofelulet",
      element: <Dashboard />,
      children: [
        { path: "feltoltott-hirdetesek", element: <ProductList /> },
        { path: "uj-hirdetes", element: <AddProduct /> },
        { path: "hirdetes-szerkesztese/:uuid", element: <EditProduct /> },
        { path: "adataim", element: <UserProfile /> },
        { path: "hirdetes/:uuid", element: <ShowProduct /> },
      ],
    },
  ]);
  return (
    <main>
      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        <RouterProvider router={routes} />
      </Suspense>
    </main>
  );
}

export default App;
