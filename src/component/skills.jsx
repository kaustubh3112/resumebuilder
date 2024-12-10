import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { setDataToLocalStorage } from "../API/Services";
import { ToastContainer, toast } from "react-toastify";

const Skills = ({ stepHandler }) => {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);

  const onSaveChanges = () => {
    setSelected(selected);
    if (selected.length === 0) {
      setError(true);
    } else {
      setError(false);
      setDataToLocalStorage("Skills", selected);
      toast("Skills Saved Successfully!");
    }
  };

  return (
    <div>
      <h4 className="text-white text-lg mb-3">Skills : </h4>
      <div className="mb-5">
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="fruits"
          placeHolder="Enter Skills"
        />
        {error && (
          <small className="text-sm inline-block text-red-400">
            This field is required.
          </small>
        )}
      </div>
      <div className="w-full">
        <button
          onClick={() => onSaveChanges()}
          className="border border-blue-500 rounded-md text-white text-md px-4 py-2 hover:bg-blue-500 bg-blue-500 min-w-28 mr-5"
        >
          Save
        </button>
        <button
          onClick={() => stepHandler("experience")}
          className="border border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500 bg-red-500 min-w-28"
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Skills;
