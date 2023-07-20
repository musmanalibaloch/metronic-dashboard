// PublicRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/Signup";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={SignUp} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
