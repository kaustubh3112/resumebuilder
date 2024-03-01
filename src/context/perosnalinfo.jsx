import React, { createContext, useContext, useState } from "react";

export const PersonalInfoContext = createContext(null);

export const usePersonalInfo = () => {
  const personalInfo = useContext(PersonalInfoContext);
  return personalInfo;
};

export const PersonalInfoProvider = (props) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dataHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("PersonalInfo", JSON.stringify({ personalInfo }));
  };

  return (
    <PersonalInfoContext.Provider
      value={{ personalInfo, setPersonalInfo, inputHandler, dataHandler }}
    >
      {props.children}
    </PersonalInfoContext.Provider>
  );
};
