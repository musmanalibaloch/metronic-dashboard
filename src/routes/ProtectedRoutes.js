// ProtectedRoutes.js
import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Org from "../pages/Org/Org";
import Employee from "../pages/Employee/Employee";
import User from "../pages/User/User";
import Tracker from "../pages/Tracker/Tracker";
import Metrics from "../pages/Metrics/Metrics";
import Health from "../pages/Health/Health";
import Configuration from "../pages/Configuration/Configuration";
import Logs from "../pages/Logs/Logs";
import { message } from "antd";
import { getAccount } from "../services/api";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const PrivateRoute = ({ component: Component, ...rest }) => {
  // State to track the authentication status and loading state
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to check authentication status
    const token = localStorage.getItem("token");
    const checkAuthentication = async () => {
      try {
        if (token) {
          const { data, status } = await getAccount(token);
          if (status === 200) {
            setAuthenticated(true);
          } else {
            setAuthenticated(false);
          }
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.log({ error });
        setAuthenticated(false);
      } finally {
        // Set loading to false after authentication check is done
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array to run the effect only once

  if (loading) {
    // Show loading indicator or some placeholder while checking authentication
    return (
      <div
        style={{ height: "100vh" }}
        className="flex justify-center items-center w-full"
      >
        <Spin indicator={antIcon} size="large" />
      </div>
    );
  }

  // return authenticated ? <Component {...rest} /> : <Navigate to="/" replace />;
  return true ? <Component {...rest} /> : <Navigate to="/" replace />;
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/org" element={<PrivateRoute component={Org} />} />
      <Route path="/employee" element={<PrivateRoute component={Employee} />} />
      <Route path="/user" element={<PrivateRoute component={User} />} />
      <Route path="/tracker" element={<PrivateRoute component={Tracker} />} />
      <Route path="/metrics" element={<PrivateRoute component={Metrics} />} />
      <Route path="/health" element={<PrivateRoute component={Health} />} />
      <Route
        path="/configuration"
        element={<PrivateRoute component={Configuration} />}
      />
      <Route path="/logs" element={<PrivateRoute component={Logs} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
