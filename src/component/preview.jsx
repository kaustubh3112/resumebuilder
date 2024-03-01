import React, { useEffect, useState } from "react";

const Preview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem("PersonalInfo"));
    setData(personalInfo);
  }, []);

  return (
    <div>
      <p>{data?.personalInfo?.name}</p>
      <p>{data?.personalInfo?.email}</p>
      <p>{data?.personalInfo?.phone}</p>
      <p>{data?.personalInfo?.bio}</p>
    </div>
  );
};

export default Preview;
