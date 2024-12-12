import { useContext, useEffect, useState } from "react";
import Experinece from "../component/experinece";
import Education from "../component/education";
import Skills from "../component/skills";
import Preview from "../component/preview";
import classNames from "classnames";
import Personalinfo from "../component/personalinfo";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { TfiAngleDown } from "react-icons/tfi";
import { FormContext } from "../context/FormContext";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});
  const formData = useContext(FormContext);
  console.log("formData", formData);
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
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  const [activetab, setActivetab] = useState("personalinfo");
  const stepHandler = (item) => {
    setActivetab(item);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const ResetFrom = () => {
    let keys = ["PersonalInfo", "Skills", "Experience", "storedEducation"];
    keys.forEach((key) => localStorage.removeItem(key));
  };

  useEffect(() => {
    getProfileData();
    formData.formSubmit();
  }, []);

  return (
    <div className="flex h-full min-h-screen">
      <div className=" basis-1/3 w-full bg-black ">
        <div className="p-10 max-w-screen-md mx-auto">
          <div className="w-full flex justify-between border-b border-b-slate-300 mb-5 pb-3">
            <h1 className="text-white font-semibold text-2xl ">
              Resume Builder
            </h1>

            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md text-white">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {user.email ? user.email : "loading...."}
                </div>
                <TfiAngleDown className="size-4 fill-white/60" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-md border transition duration-100 ease-out bg-gray-900 text-white py-3"
              >
                <MenuItem>
                  <button
                    onClick={ResetFrom}
                    className="text-sm flex w-full items-center gap-2  py-2 px-5 data-[focus]:bg-white/10"
                  >
                    Reset From
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={logout}
                    className="text-sm flex w-full items-center gap-2  py-2 px-5 data-[focus]:bg-white/10"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
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
