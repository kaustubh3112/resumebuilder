import React, { useState } from 'react'

const Education = () => {

  const [education, setEducation] = useState({
    college: "",
    passingyear: "",
    university: ""
  })

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const educationFormHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("education", JSON.stringify({ ...education }))
  }



  return (
    <>
      <form className='w-full mb-5' onSubmit={educationFormHandler} noValidate>
        <h4 className='text-white text-lg mb-3'>Education : </h4>

        <Educationfrom
          inputHandler={inputHandler}
          college={education.college}
          passingyear={education.passingyear}
          university={education.university}
        />

        <button className='border mb-5 border-blue-500 rounded-md text-white text-md px-4 py-2 hover:bg-blue-500 bg-blue-500 min-w-28 mr-5' type='submit'>
          Add Education </button>

        <div className='w-full'>
          <button className='border border-blue-500 rounded-md text-white text-md px-4 py-2 hover:bg-blue-500 bg-blue-500 min-w-28 mr-5' type='submit'>Save</button>
          <button className='border border-gray-500 rounded-md text-white text-md px-4 py-2 hover:bg-gray-500 bg-gray-500 min-w-28'>Next</button>
        </div>
      </form>
    </>
  )
}

export default Education

const Educationfrom = ({ inputHandler, college, passingyear, university }) => {
  return (
    <>
      <div className='mb-5'>
        <input
          name='college'
          placeholder='College Name'
          type='text'
          className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
          onChange={inputHandler}
          value={college}
        />
      </div>

      <div className='mb-5'>
        <input
          name='passingyear'
          placeholder='Passing year'
          type='text'
          className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
          onChange={inputHandler}
          value={passingyear}
        />
      </div>
      <div className='mb-5'>
        <input
          name='university'
          placeholder='University Name'
          type='text'
          className='bg-transparent text-white border border-slate-300 px-5 py-3 w-full rounded-md'
          onChange={inputHandler}
          value={university}
        />
      </div>
    </>
  )
}
