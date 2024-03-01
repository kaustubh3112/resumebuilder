import React, { createContext, useContext } from "react";

export const PersonalInfoContext = createContext(null);

export const usePersonalInfo = () => {
    const personalInfo = useContext(PersonalInfoContext);
    return personalInfo;
}

export const PersonalInfoProvider = (props) => {

    const test = "test"

    return (
        <PersonalInfoContext.Provider value={test}>
            {props.children} {/* Render children */}
        </PersonalInfoContext.Provider>
    );
}
