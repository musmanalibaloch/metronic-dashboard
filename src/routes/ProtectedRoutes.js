// ProtectedRoutes.js
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Org from "../pages/Org/Org";
import Employee from "../pages/Employee/Employee";

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
    </>
  );
};

export default ProtectedRoutes;
