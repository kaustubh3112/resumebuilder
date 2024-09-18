import React, { useEffect, useState } from "react";

const Preview = () => {
  const [allexperiences, setAllexperiences] = useState([{}, {}, {}, {}]);
  const [skillsPreview, setSkillsPreview] = useState({});

  useEffect(() => {
    const skillsInfoString = localStorage.getItem("Skills");
    setSkillsPreview(skillsInfoString);
  }, []);

  console.log("skillsInfo", skillsPreview);

  return (
    <div className="p-10">
      <div className="border border-slate-400 p-10 max-w-[800px] mx-auto">
        <div className="">
          <h2 className="font-bold mb-3 text-2xl text-black">
            Kaustubh Anant Yeolekar
          </h2>
          <h6 className="text-slate-700 text-md">
            <span className="font-medium">Email:</span>{" "}
            kaustubhyeolekar@gmail.com
          </h6>
          <h6 className="text-slate-700  text-md">
            <span className="font-medium">Mobile:</span> 7276168514 | 8999871414
          </h6>
          <h3 className="text-blue-700  text-lg font-bold mt-2 mb-2">
            Summary
          </h3>
          <p className="text-slate-700  text-md mt-2 mb-5">
            Experienced and detail-oriented UI Developer with over 7+ years of
            hands-on experience, proficient in developing responsive websites
            and applications. Skilled in modern HTML5, CSS3, Bootstrap 5,
            JavaScript, jQuery, React, and Tailwind CSS. Successfully completed
            various projects from scratch. Skilled in modern HTML5, CSS3,
            Bootstrap 5, JavaScript, jQuery, React, and Tailwind CSS.
            Successfully completed various projects from scratch
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-blue-700  text-lg font-bold mt-2 mb-2">
            Technical Skills
          </h3>
          <ul className="flex items-center flex-wrap">
            {/* {skillsInfo} */}
            {/* {skillsPreview.map((skills, index) => {
              return (
                <li
                  key={index}
                  className="text-sm text-slate-700 font-medium mr-2"
                >
                  {skills},
                </li>
              );
            })} */}
          </ul>
        </div>
        <div className="">
          <h3 className="text-blue-700  text-lg font-bold mt-2 mb-2">
            Professional Experience
          </h3>

          <ul className="">
            {allexperiences.map((company, index) => {
              return (
                <li key={index}>
                  <h4>
                    <span className="font-medium"> BlocksOne Pvt Ltd </span>,
                    <span className="font-medium">
                      {" "}
                      Hinjewadi Phase 2, Pune.{" "}
                    </span>
                    |<span className="font-medium"> UI Developer.</span>
                  </h4>
                  <h6 className="font-medium text-sm mt-1">
                    August 2023 - Present
                  </h6>
                  <p className="text-slate-700  text-md mt-1 mb-5">
                    Developing UI for a blockchain application, covering stake,
                    swap, wallet, and explorer features. Also involved in wallet
                    Chrome Extension Development. Application, covering stake,
                    swap, wallet, and explorer features. Also involved in wallet
                    Chrome Extension Development.
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <h3 className="text-blue-700  text-lg font-bold mt-2 mb-2">
            Education
          </h3>
          <h4>
            <span className="font-medium"> C.M.C.S. College, Nashik</span> | ,
            <span className="font-medium"> B.com (2019)</span> |
            <span className="font-medium"> Pune University.</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Preview;
