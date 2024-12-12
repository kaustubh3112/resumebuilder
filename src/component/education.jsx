import { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { ToastContainer, toast } from "react-toastify";

const Education = () => {
  const formDetails = useContext(FormContext);
  const [education, setEducation] = useState({
    college: "",
    passingyear: "",
    university: "",
    degree: "",
  });

  const [allEducation, setAllEducation] = useState([]);
  const [error, setError] = useState({});

  const AddNewFields = (e) => {
    e.preventDefault();
    setError({});
    setEducation({
      college: "",
      passingyear: "",
      university: "",
      degree: "",
    });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
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

    if (!education.college.trim()) {
      newErrors.college = "College Name is required.";
      isValid = false;
    }

    if (
      !education.passingyear.trim() ||
      education.passingyear < 1900 ||
      education.passingyear > new Date().getFullYear()
    ) {
      newErrors.passingyear = "Please enter a valid passing year.";
      isValid = false;
    }

    if (!education.university.trim()) {
      newErrors.university = "University Name is required.";
      isValid = false;
    }

    if (!education.degree.trim()) {
      newErrors.degree = "Degree is required.";
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  const educationFormHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      setAllEducation((prev) => [...prev, education]);
      toast.success("Education details saved successfully!");
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("storedEducation");
    if (storedData) {
      setAllEducation(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (allEducation.length > 0) {
      localStorage.setItem("storedEducation", JSON.stringify(allEducation));
    }
  }, [allEducation]);

  return (
    <>
      <form className="w-full mb-5" onSubmit={educationFormHandler} noValidate>
        <div className="flex items-center justify-between gap-5 mb-3">
          <h4 className="text-white text-lg ">Education:</h4>
          <button
            type="button"
            className="text-white px-2 py-1.5 rounded-md text-sm bg-white/20"
            onClick={AddNewFields}
          >
            Add New
          </button>
        </div>

        <div className="mb-5">
          <input
            name="college"
            placeholder="College Name"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={education.college}
          />
          {error.college && (
            <small className="text-red-400">{error.college}</small>
          )}
        </div>

        <div className="mb-5">
          <input
            name="degree"
            placeholder="Degree"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={education.degree}
          />
          {error.degree && (
            <small className="text-red-400">{error.degree}</small>
          )}
        </div>

        <div className="mb-5">
          <input
            name="passingyear"
            placeholder="Passing Year"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={education.passingyear}
            maxLength="4"
          />
          {error.passingyear && (
            <small className="text-red-400">{error.passingyear}</small>
          )}
        </div>

        <div className="mb-5">
          <input
            name="university"
            placeholder="University Name"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={education.university}
          />
          {error.university && (
            <small className="text-red-400">{error.university}</small>
          )}
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
            onClick={() => formDetails.formSubmit()}
            className="border border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500 bg-red-500 min-w-28"
          >
            Submit
          </button>
        </div>
        <ToastContainer position="top-center" />
      </form>
    </>
  );
};

export default Education;
