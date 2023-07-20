// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import PublicRoutes from "./routes/PublicRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Switch> */}
        <PublicRoutes />
        <ProtectedRoutes />
        {/* </Switch> */}
      </div>
    </Router>
  );
};

export default App;
