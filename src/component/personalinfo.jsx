import React, { useState } from 'react'
import {  usePersonalInfo } from '../context/perosnalinfo';

const Personalinfo = ({ }) => {

  const useContext = usePersonalInfo();

  console.log("useContext",useContext)


  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    bio: ""
  });


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const dataHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("PersonalInfo", JSON.stringify({ personalInfo }))
  }


  return (
    <>
      <form className='w-full mb-5' onSubmit={dataHandler} noValidate>
        <h4 className='text-white text-lg mb-3'>Personal Details : </h4>
        <div className='mb-5'>
          <input
            name='name'
            placeholder='Name'
            type='text'
            className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
            value={personalInfo.name}
            onChange={inputHandler}
          />
        </div>
        <div className='mb-5'>
          <input
            name='email'
            placeholder='Email'
            type='email'
            className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
            value={personalInfo.emai}
            onChange={inputHandler}
          />
        </div>
        <div className='mb-5'>
          <input
            name='phone'
            placeholder='Phone Number'
            type='text'
            className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
            value={personalInfo.phone}
            onChange={inputHandler}
          />
        </div>
        <div className='mb-5'>
          <textarea
            name='bio'
            placeholder='Bio' rows={5}
            type='text'
            className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
            value={personalInfo.bio}
            onChange={inputHandler}
          />
        </div>
        <div className='w-full'>
          <button className='border border-blue-500 rounded-md text-white text-md px-4 py-2 hover:bg-blue-500 bg-blue-500 min-w-28 mr-5' type='submit'>Save</button>
          <button className='border border-gray-500 rounded-md text-white text-md px-4 py-2 hover:bg-gray-500 bg-gray-500 min-w-28'>Next</button>
        </div>
      </form>
    </>
  )
}

export default Personalinfo