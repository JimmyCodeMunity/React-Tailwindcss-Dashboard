import React, { useState } from "react";
import Analytics from "./Analytics";
import Graph from "./Graph";
import Recents from "./Recents";
import * as Icon from 'react-feather'
import TemporaryDrawer from "./Drawer";

const DashBoard = () => {
  const [open, setOpen] = useState(false);
  const show = () =>{
    setOpen(!open);
  }
  return (

    <div className="w-full pt-12 space-y-5 h-screen">
      {/* drawer */}
      <TemporaryDrawer open={open} setOpen={setOpen}/>
      {/* dash opener */}
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start">
        <div>
          <h2 className="text-[30px] text-black font-poppins font-bold">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input id="datepicker-format" datepicker datepicker-min-date="06/04/2024" datepicker-max-date="05/05/2025" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>

          </div>
          <div>
            <button onClick={show} className="bg-black flex space-x-2 items-center text-white text-sm py-2 px-2 rounded-md">
              Download
              <Icon.Download color="white" size={15}/>
            </button>
          </div>
        </div>
      </div>

      {/* lst items */}
      <div className="w-full flex justify-start items-start py-6">
        <ul className="flex items-center space-x-4">
          <li className="shadow shadow-b-lg border border-b-slate-300 rounded-lg">
            <a href="" className="text-sm font-poppins tracking-wide">
              Overview
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-sm font-poppins text-slate-400 tracking-wide"
            >
              Analytics
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-sm font-poppins text-slate-400 tracking-wide"
            >
              Reports
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-sm font-poppins text-slate-400 tracking-wide"
            >
              Notifications
            </a>
          </li>
        </ul>
      </div>

      {/* analytics */}
      <Analytics />

      {/* recents and graphs */}
      <div className="w-full flex md:flex-row flex-col justify-between items-center gap-4">
        <div className="md:w-[60%] w-full h-[600px] border border-slate-300 rounded-md">
          <Graph />
        </div>
        <div className="md:w-[40%] w-full md:h-[600px] h-[400px] overflow-y-scroll border border-slate-300 rounded-md">
          <Recents />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
