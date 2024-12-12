import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!loginForm.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(loginForm.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!loginForm.password.trim()) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      email: loginForm.email,
      password: loginForm.password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        navigate("/home");
      })
      .catch((err) => {
        setError((prevError) => ({
          ...prevError,
          general: "Login failed. Please try valid email & password.",
        }));
        console.log("Login Failed:", err);
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
          <form className="space-y-6" noValidate>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-slate-300"
                  onChange={inputHandler}
                  value={loginForm.email}
                />
                {error.email && (
                  <small className="text-red-500 text-sm">{error.email}</small>
                )}
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-slate-300"
                  onChange={inputHandler}
                  value={loginForm.password}
                />
                {error.password && (
                  <small className="text-red-500 text-sm">
                    {error.password}
                  </small>
                )}
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
              {error.general && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  {error.general}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <p className="text-sm text-slate-600 text-center">
        "Use Email:{" "}
        <span className="text-black font-semibold">john@mail.com</span> and
        Password: <span className="text-black font-semibold">changeme</span> to
        explore the Resume Builder Dashboard."
      </p>
    </>
  );
};

export default Login;
