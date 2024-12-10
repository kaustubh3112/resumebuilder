import axios from "axios";
import React, { useState } from "react";
import Profile from "./profile";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        navigate("/home");
      })
      .catch((err) => {
        navigate("/");
        console.log("Login Failed", err);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" noValidate>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-slate-300"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholders="Email"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-slate-300"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholders="password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 text-white px-3 py-2 font-medium"
                onClick={handleClick}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-sm text-slate-400 text-center">
        "Use Email: john@mail.com and Password: changeme to explore the Resume
        Builder Dashboard."
      </p>
    </>
  );
};

export default Login;
