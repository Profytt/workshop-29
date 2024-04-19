import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/NewPlayer">Sign Up</Link>
      </div>
    </div>
  );
}
