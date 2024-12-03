import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lp from "./components/Lp";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Dp from "./components/Dp";

const App = () => {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Lp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<Dp />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
