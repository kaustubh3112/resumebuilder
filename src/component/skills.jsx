import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Skills = () => {
  const [selected, setSelected] = useState([]);

  const onSaveChanges = () => {
    setSelected(selected);
    localStorage.setItem("Skills", JSON.stringify(selected));
  };

  return (
    <div>
      <h4 className="text-white text-lg mb-3">Skills : </h4>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="Enter Skills"
      />
      <div className="w-full">
        <button
          onClick={() => onSaveChanges()}
          className="border border-blue-500 rounded-md text-white text-md px-4 py-2 hover:bg-blue-500 bg-blue-500 min-w-28 mr-5"
        >
          Save
        </button>
        <button className="border border-gray-500 rounded-md text-white text-md px-4 py-2 hover:bg-gray-500 bg-gray-500 min-w-28">
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;
