import React from "react";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </div>
    </Router>
  );
}

export default App;
