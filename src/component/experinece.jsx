import React, { useEffect, useState } from "react";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "../API/Services";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import CustomDatePicker from "./CustomDatePicker";

const Experience = ({ stepHandler }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formData, setFormData] = useState({
    company: "",
    designation: "",
    location: "",
    joiningDate: startDate.toLocaleDateString(),
    resigningDate: endDate.toLocaleDateString(),
    description: "",
  });

  const [expData, setExpData] = useState([]);
  const [error, setError] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const AddNewFields = (e) => {
    e.preventDefault();
    setFormData({
      company: "",
      designation: "",
      location: "",
      joiningDate: new Date(),
      resigningDate: new Date(),
      description: "",
    });
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.company.trim()) {
      newErrors.company = "This field is required.";
      isValid = false;
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "This field is required.";
      isValid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location = "This field is required.";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "This field is required.";
      isValid = false;
    }

    if (startDate >= endDate) {
      newErrors.startDate = "Start date must be earlier than end date.";
      newErrors.endDate = "End date must be later than start date.";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const expFormHandler = (e) => {
    e.preventDefault();

    if (validate()) {
      setExpData((prev) => [...prev, formData]);
      toast.success("Experience Details Saved Successfully!");
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  useEffect(() => {
    const storedData = getDataFromLocalStorage("Experience");
    if (storedData) {
      setExpData(storedData);
    }
  }, []);

  useEffect(() => {
    if (expData.length > 0) {
      setDataToLocalStorage("Experience", expData);
    }
  }, [expData]);

  return (
    <>
      <form className="w-full mb-5" onSubmit={expFormHandler} noValidate>
        <div className="flex items-center justify-between gap-5 mb-3">
          <h4 className="text-white text-lg  flex items-center justify-between">
            Experience :
          </h4>
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
            name="company"
            placeholder="Company Name"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={formData.company}
          />
          {error.company && (
            <small className="text-sm inline-block text-red-400">
              {error.company}
            </small>
          )}
        </div>
        <div className="mb-5">
          <input
            name="designation"
            placeholder="Designation"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={formData.designation}
          />
          {error.designation && (
            <small className="text-sm inline-block text-red-400">
              {error.designation}
            </small>
          )}
        </div>
        <div className="mb-5">
          <input
            name="location"
            placeholder="Location"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={formData.location}
          />
          {error.location && (
            <small className="text-sm inline-block text-red-400">
              {error.location}
            </small>
          )}
        </div>
        <div className="mb-5">
          <CustomDatePicker
            selectedDate={startDate}
            onChange={setStartDate}
            minDate={new Date(1990, 0, 1)}
          />
          {error.startDate && (
            <small className="text-sm inline-block text-red-400">
              {error.startDate}
            </small>
          )}
        </div>
        <div className="mb-5">
          <CustomDatePicker
            selectedDate={endDate}
            onChange={setEndDate}
            minDate={startDate}
          />
          {error.endDate && (
            <small className="text-sm inline-block text-red-400">
              {error.endDate}
            </small>
          )}
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            placeholder="Something tell about your role..."
            rows={5}
            type="text"
            onChange={inputHandler}
            value={formData.description}
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            maxLength={480}
          />
          {error.description && (
            <small className="text-sm inline-block text-red-400">
              {error.description}
            </small>
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
            className="border border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500 bg-red-500 min-w-28"
            onClick={() => stepHandler("education")}
          >
            Next
          </button>
        </div>
        <ToastContainer position="top-center" />
      </form>
    </>
  );
};

export default Experience;
