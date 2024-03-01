import React, { useEffect, useState } from "react";

const Experience = () => {
  const [formData, setFormData] = useState({
    company: "",
    location: "",
    joiningDate: "",
    resigningDate: "",
    description: "",
  });
  const [expData, setExpData] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetExperience = () => {
    setFormData({
      company: "",
      location: "",
      joiningDate: "",
      resigningDate: "",
      description: "",
    });
  };

  const expFormHandler = (e) => {
    e.preventDefault();
    setExpData((prev) => [...prev, formData]);
    resetExperience();
  };

  useEffect(() => {
    const storedData = localStorage.getItem("ExperienceData");
    if (storedData) {
      setExpData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (expData.length > 0) {
      localStorage.setItem("ExperienceData", JSON.stringify(expData));
    }
  }, [expData]);

  return (
    <>
      <form className="w-full mb-5" onSubmit={expFormHandler} noValidate>
        <h4 className="text-white text-lg mb-3 flex items-center justify-between">
          Experience :
        </h4>
        <div className="mb-5">
          <input
            name="company"
            placeholder="Company Name"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={formData.company}
          />
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
        </div>
        <div className="mb-5">
          <input
            name="joiningDate"
            placeholder="Joining Date"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={formData.joiningDate}
          />
        </div>
        <div className="mb-5">
          <input
            name="resigningDate"
            placeholder="Resignation Date"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={formData.resigningDate}
          />
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
          />
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
            className="border border-gray-500 rounded-md text-white text-md px-4 py-2 hover:bg-gray-500 bg-gray-500 min-w-28"
            onClick={() => {}}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Experience;
