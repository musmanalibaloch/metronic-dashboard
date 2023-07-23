// ProtectedRoutes.js
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Org from "../pages/Org/Org";
import Employee from "../pages/Employee/Employee";
import User from "../pages/User/User";
import Tracker from "../pages/Tracker/Tracker";
import Metrics from "../pages/Metrics/Metrics";
import Health from "../pages/Health/Health";

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
      <PrivateRoute exact path="/tracker" Component={Tracker} />
      <PrivateRoute exact path="/metrics" Component={Metrics} />
      <PrivateRoute exact path="/health" Component={Health} />
    </>
  );
};

export default ProtectedRoutes;
