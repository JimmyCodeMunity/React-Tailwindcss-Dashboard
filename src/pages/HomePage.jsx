import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DashBoard from '../components/DashBoard'

const HomePage = () => {
  return (
    <div className="flex-1 w-full h-screen overflow-hidden bg-primary overflow-y-scroll">
      
          

      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>
      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <DashBoard/>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default HomePage
