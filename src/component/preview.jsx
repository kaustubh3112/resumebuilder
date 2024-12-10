import React, { useContext, useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import { FormContext } from "../context/FormContext";

const Preview = () => {
  const formData = useContext(FormContext);
  const { toPDF, targetRef } = usePDF({
    filename: `CV - ${formData.previewPersonalInfo.name}`,
  });

  useEffect(() => {
    formData.formSubmit();
  }, []);

  return (
    <div className="p-5">
      <div className="border border-slate-400 max-w-[800px] mx-auto min-h-[1200px]">
        <div ref={targetRef} className="w-full  p-10 max-w-[800px] mx-auto">
          {Object.keys(formData.previewPersonalInfo).length > 0 && (
            <div>
              <h2 className="font-bold mb-3 text-2xl text-black">
                {formData.previewPersonalInfo.name} - (
                {formData.previewPersonalInfo.designation})
              </h2>
              <h6 className="text-slate-700 text-md">
                <span className="font-medium">Email:</span>{" "}
                {formData.previewPersonalInfo.email}
              </h6>
              <h6 className="text-slate-700 text-md">
                <span className="font-medium">Mobile:</span>{" "}
                {formData.previewPersonalInfo.phone}
              </h6>
              <h6 className="text-slate-700 text-md">
                <span className="font-medium">LinkedIn Profile:</span>{" "}
                {formData.previewPersonalInfo.socialMediaProfile}
              </h6>
              <h3 className="text-blue-700 text-md font-semibold mt-2 mb-2">
                Summary
              </h3>
              <p className="text-slate-700 text-sm mt-2 mb-5">
                {formData.previewPersonalInfo.bio}
              </p>
            </div>
          )}
          {formData.previewSkills.length > 0 && (
            <div className="mb-5">
              <h3 className="text-blue-700 text-md font-semibold mt-2 mb-2">
                Technical Skills
              </h3>
              <ul className="flex items-center flex-wrap">
                {formData.previewSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-700 font-medium mr-2"
                  >
                    {skill} ,
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formData.previewExperience.length > 0 && (
            <div>
              <h3 className="text-blue-700 text-md font-semibold mt-2 mb-2">
                Professional Experience
              </h3>
              <ul>
                {formData.previewExperience.map((company, index) => (
                  <li key={index}>
                    <h4>
                      <span className="font-medium">{company.company}</span>,{" "}
                      <span className="font-medium">{company.location}</span> |{" "}
                      <span className="font-medium">{company.designation}</span>
                    </h4>
                    <h6 className="font-medium text-sm mt-1">
                      {company.joiningDate} - {company.resigningDate}
                    </h6>
                    <p className="text-slate-700 text-sm mt-1 mb-5">
                      {company.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formData.previewEducation.length > 0 && (
            <div>
              <h3 className="text-blue-700 text-md font-semibold mt-2 mb-2">
                Education
              </h3>
              <ul>
                {formData.previewEducation.map((education, index) => (
                  <li key={index}>
                    <h4>
                      <span className="font-medium">{education.college}</span>|{" "}
                      <span className="font-medium">{education.degree}</span>|{" "}
                      <span className="font-medium">
                        {education.passingyear}
                      </span>
                      |{" "}
                      <span className="font-medium">
                        {education.university}
                      </span>{" "}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-3">
        <button
          onClick={() => toPDF()}
          className="bg-blue-500 text-white px-5 py-2 rounded-md "
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Preview;
