import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="">
      <button
        className="px-3 py-2 my-3 bg-red-600 rounded-sm w-full"
        onClick={handleLogout}
      >Logout</button>
    </div>
  );
};

export default Logout;
