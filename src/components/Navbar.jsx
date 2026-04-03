import { useState } from "react";

const Navbar = ({ setRole }) => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Finance Dashboard</h1>

      <select
        className="text-black p-1 rounded"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default Navbar;