import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="hover:text-blue-300">About</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;