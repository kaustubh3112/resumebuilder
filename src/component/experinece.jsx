import React, { useEffect, useState } from "react";

const Experience = () => {
  const [expData, setExpData] = useState({
    company: "",
    location: "",
    joiningDate: "",
    resigningDate: "",
    description: "",
  });
  const [allExpData, setAllExpData] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setExpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const expFormHandler = (e) => {
    e.preventDefault();
    setAllExpData((prev) => [...prev, { ...expData }]);
    setExpData({
      company: "",
      location: "",
      joiningDate: "",
      resigningDate: "",
      description: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("experienceData", JSON.stringify(allExpData));
  }, [allExpData]);

  return (
    <>
      <form className="w-full mb-5" onSubmit={expFormHandler} noValidate>
        <h4 className="text-white text-lg mb-3 flex items-center justify-between">
          Experience :{" "}
          <button
            className="border border-gray-500 rounded-md text-white text-sm px-2 py-2 hover:bg-gray-500 bg-gray-500 min-w-28"
            type="button"
            onClick={expFormHandler}
          >
            Add Experience
          </button>{" "}
        </h4>
        <div className="mb-5">
          <input
            name="company"
            placeholder="Company Name"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={expData.company}
          />
        </div>
        <div className="mb-5">
          <input
            name="location"
            placeholder="Location"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={expData.location}
          />
        </div>
        <div className="mb-5">
          <input
            name="joiningDate"
            placeholder="Joining Date"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={expData.joiningDate}
          />
        </div>
        <div className="mb-5">
          <input
            name="resigningDate"
            placeholder="Resignation Date"
            type="text"
            className="bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md"
            onChange={inputHandler}
            value={expData.resigningDate}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            placeholder="Something tell about your role..."
            rows={5}
            type="text"
            onChange={inputHandler}
            value={expData.description}
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
          {/* You can remove this 'Next' button if not needed */}
          <button className="border border-gray-500 rounded-md text-white text-md px-4 py-2 hover:bg-gray-500 bg-gray-500 min-w-28">
            Next
          </button>
        </div>
      </form>

      {/* Render all experience data */}
      {allExpData.map((exp, index) => (
        <div key={index}>
          <p className="text-white">{exp.company}</p>
          <p className="text-white">{exp.location}</p>
          <p className="text-white">{exp.joiningDate}</p>
          <p className="text-white">{exp.resigningDate}</p>
          <p className="text-white">{exp.description}</p>
        </div>
      ))}
    </>
  );
};

export default Experience;
