// PublicRoutes.js
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";
import { getAccount } from "../services/api";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const PublicRoute = ({ component: Component, ...rest }) => {
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
            setAuthenticated(false);
          } else {
            setAuthenticated(true);
          }
        } else {
          setAuthenticated(true);
        }
      } catch (error) {
        console.log({ error });
        setAuthenticated(true);
      } finally {
        // Set loading to true after authentication check is done
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
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return authenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/org" replace />
  );
};

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute component={Login} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route path="/signup" element={<PublicRoute component={SignUp} />} />

        {/* Not protected */}
        {/* <Route exact path="/" Component={Login} /> */}
      </Routes>
    </>
  );
};

export default PublicRoutes;
