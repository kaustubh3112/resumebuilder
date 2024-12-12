import React, { useState } from "react";
import { setDataToLocalStorage } from "../API/Services";
import { ToastContainer, toast } from "react-toastify";

const Personalinfo = ({ stepHandler }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    designation: "",
    socialMediaProfile: "",
  });

  const [error, setError] = useState({});

  // Input Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
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
    let phoneRegex = /^\d{10}$/;
    if (!personalInfo.name.trim()) {
      newErrors.name = "This field is required.";
      isValid = false;
    }

    if (!personalInfo.email.trim()) {
      newErrors.email = "This field is required.";
      isValid = false;
    } else if (!emailRegex.test(personalInfo.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!personalInfo.phone.trim()) {
      newErrors.phone = "This field is required.";
      isValid = false;
    } else if (!phoneRegex.test(personalInfo.phone)) {
      newErrors.phone = "Invalid Phone format. Max 10 digits are allow";
      isValid = false;
    }

    if (!personalInfo.designation.trim()) {
      newErrors.designation = "This field is required.";
      isValid = false;
    }

    if (!personalInfo.bio.trim()) {
      newErrors.bio = "This field is required.";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  // Data Handler
  const dataHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      setDataToLocalStorage("PersonalInfo", personalInfo);
      toast.success("Personal Information Saved Successfully!");
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  return (
    <>
      <form className="w-full mb-5" onSubmit={dataHandler} noValidate>
        <h4 className="text-white text-lg mb-3">Personal Details :</h4>

        <div className="mb-5">
          <input
            name="name"
            placeholder="Name*"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            value={personalInfo.name}
            onChange={inputHandler}
          />
          {error.name && <small className="text-red-400">{error.name}</small>}
        </div>

        <div className="mb-5">
          <input
            name="email"
            placeholder="Email*"
            type="email"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            value={personalInfo.email}
            onChange={inputHandler}
          />
          {error.email && <small className="text-red-400">{error.email}</small>}
        </div>

        <div className="mb-5">
          <input
            name="phone"
            placeholder="Phone Number*"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md appearance-none focus:appearance-none"
            value={personalInfo.phone}
            onChange={inputHandler}
            maxLength="10"
          />
          {error.phone && <small className="text-red-400">{error.phone}</small>}
        </div>

        <div className="mb-5">
          <input
            name="designation"
            placeholder="Designation*"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            value={personalInfo.designation}
            onChange={inputHandler}
          />
          {error.designation && (
            <small className="text-red-400">{error.designation}</small>
          )}
        </div>

        <div className="mb-5">
          <input
            name="socialMediaProfile"
            placeholder="LinkedIn Profile"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            value={personalInfo.socialMediaProfile}
            onChange={inputHandler}
          />
        </div>

        <div className="mb-5">
          <textarea
            name="bio"
            placeholder="Bio*"
            rows={5}
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            value={personalInfo.bio}
            onChange={inputHandler}
            maxLength="480"
          />
          {error.bio && <small className="text-red-400">{error.bio}</small>}
        </div>

        <div className="w-full">
          <button
            className="border border-blue-500 rounded-md text-white text-md px-4 py-2 hover:bg-blue-500 bg-blue-500 min-w-28 mr-5"
            type="submit"
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => stepHandler("skills")}
            className="border border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500 bg-red-500 min-w-28"
          >
            Next
          </button>
        </div>
        <ToastContainer position="top-center" />
      </form>
    </>
  );
};

export default Personalinfo;
