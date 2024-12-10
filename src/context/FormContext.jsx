import { createContext, useContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = (props) => {
  const [previewPersonalInfo, setPreviewPersonalInfo] = useState({});
  const [previewSkills, setPreviewSkills] = useState([]);
  const [previewEducation, setPreviewEducation] = useState([]);
  const [previewExperience, setPreviewExperience] = useState([]);

  const formSubmit = () => {
    const storedPI = localStorage.getItem("PersonalInfo");
    setPreviewPersonalInfo(storedPI ? JSON.parse(storedPI) : {});

    const storedSkills = localStorage.getItem("Skills");
    setPreviewSkills(storedSkills ? JSON.parse(storedSkills) : []);

    const storedEducation = localStorage.getItem("storedEducation");
    setPreviewEducation(storedEducation ? JSON.parse(storedEducation) : []);

    const storedExperience = localStorage.getItem("Experience");
    setPreviewExperience(storedExperience ? JSON.parse(storedExperience) : []);
  };

  return (
    <FormContext.Provider
      value={{
        formSubmit,
        previewPersonalInfo,
        previewSkills,
        previewEducation,
        previewExperience,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};
