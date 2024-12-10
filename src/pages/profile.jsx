import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        console.log(res), setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-80">
      <div>Profile</div>
      <button
        onClick={getProfileData}
        className="px-4 py-2 rounded-sm bg-blue-500 text-white"
      >
        Get Profile Data
      </button>
      <button
        onClick={logout}
        className="px-4 py-2 rounded-sm bg-red-500 text-white"
      >
        Logout
      </button>
      <div className="mt-5">
        {user && (
          <>
            <img src={user.avatar} />
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
