import { useState } from 'react'
import './App.css'
import Personalinfo from './component/personalinfo'
import Experinece from './component/experinece'
import Education from './component/education'
import Skills from './component/skills'
import Preview from './component/preview'

function App({}) {

  const [activetab, setActivetab] = useState("personalinfo");

  const stepHandler = (item) => {
    setActivetab(item);
  }

  return (
    <div className='flex h-full min-h-screen overflow-auto'>
      <div className='basis-1/3 bg-black'>
        <div className='p-10'>
          <h1 className='text-white font-semibold text-2xl border-b border-b-slate-300 mb-5 pb-3'>Resume Builder</h1>
          <ul className='flex w-full py-5 mb-5'>
            <li className='mr-3'>
              <button onClick={() => stepHandler("personalinfo") ? setActivetab("personalinfo") : ""} className='border border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500 bg-red-500'>Personal Information</button>
            </li>
            <li className='mr-3'>
              <button onClick={() => stepHandler("skills") ? setActivetab("skills") : ""} className='border border-white hover:border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500'>Skills</button>
            </li>
            <li className='mr-3'>
              <button onClick={() => stepHandler("experience") ? setActivetab("experience") : ""} className='border border-white hover:border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500'>Experience</button>
            </li>
            <li>
              <button onClick={() => stepHandler("education") ? setActivetab("education") : ""} className='border border-white hover:border-red-500 rounded-md text-white text-md px-4 py-2 hover:bg-red-500'>Education</button>
            </li>
          </ul>
          {
            activetab === "personalinfo" ? <Personalinfo  /> : ""
          }
          {
            activetab === "skills" ? <Skills /> : ""
          }
          {
            activetab === "experience" ? <Experinece /> : ""
          }
          {
            activetab === "education" ? <Education /> : ""
          }

        </div>
      </div>
      <div className='basis-2/3'>
        <Preview/>
      </div>
    </div>
  )
}

export default App
