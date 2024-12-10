import { useEffect, useState } from "react";

import Experinece from "../component/experinece";
import Education from "../component/education";
import Skills from "../component/skills";
import Preview from "../component/preview";
import classNames from "classnames";
import Personalinfo from "../component/personalinfo";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const [activetab, setActivetab] = useState("personalinfo");
  const stepHandler = (item) => {
    setActivetab(item);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex h-full min-h-screen overflow-auto">
      <div className="basis-1/3 bg-black ">
        <div className="p-10 sticky top-0 left-0">
          <div className="w-full flex justify-between border-b border-b-slate-300 mb-5 pb-3">
            <h1 className="text-white font-semibold text-2xl ">
              Resume Builder
            </h1>
            <button onClick={logout} className="text-white text-sm">
              Logout
            </button>
          </div>
          <ul className="flex w-full py-5 mb-5">
            <li className="mr-3">
              <button
                onClick={() =>
                  stepHandler("personalinfo")
                    ? setActivetab("personalinfo")
                    : ""
                }
                className={classNames(
                  "border  rounded-md text-white text-md px-4 py-2 hover:bg-red-500",
                  activetab === "personalinfo"
                    ? "bg-red-500 border-red-500"
                    : ""
                )}
              >
                Personal
              </button>
            </li>
            <li className="mr-3">
              <button
                onClick={() =>
                  stepHandler("skills") ? setActivetab("skills") : ""
                }
                className={classNames(
                  "border  rounded-md text-white text-md px-4 py-2 hover:bg-red-500",
                  activetab === "skills" ? "bg-red-500 border-red-500" : ""
                )}
              >
                Skills
              </button>
            </li>
            <li className="mr-3">
              <button
                onClick={() =>
                  stepHandler("experience") ? setActivetab("experience") : ""
                }
                className={classNames(
                  "border  rounded-md text-white text-md px-4 py-2 hover:bg-red-500",
                  activetab === "experience" ? "bg-red-500 border-red-500" : ""
                )}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  stepHandler("education") ? setActivetab("education") : ""
                }
                className={classNames(
                  "border  rounded-md text-white text-md px-4 py-2 hover:bg-red-500",
                  activetab === "education" ? "bg-red-500 border-red-500" : ""
                )}
              >
                Education
              </button>
            </li>
          </ul>
          {activetab === "personalinfo" ? (
            <Personalinfo stepHandler={stepHandler} />
          ) : (
            ""
          )}
          {activetab === "skills" ? <Skills stepHandler={stepHandler} /> : ""}
          {activetab === "experience" ? (
            <Experinece stepHandler={stepHandler} />
          ) : (
            ""
          )}
          {activetab === "education" ? (
            <Education stepHandler={stepHandler} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="basis-2/3">
        <Preview />
      </div>
    </div>
  );
};

export default Home;
