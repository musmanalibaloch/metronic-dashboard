// ProtectedRoutes.js
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Org from "../pages/Org/Org";
import Employee from "../pages/Employee/Employee";
import User from "../pages/User/User";

const isAuthenticated = () => {
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated() ? <Component {...props} /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
};

const ProtectedRoutes = () => {
  return (
    <>
      <PrivateRoute exact path="/org" Component={Org} />
      <PrivateRoute exact path="/employee" Component={Employee} />
      <PrivateRoute exact path="/user" Component={User} />
    </>
  );
};

export default ProtectedRoutes;
