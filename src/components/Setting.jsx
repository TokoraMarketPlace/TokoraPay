import React from 'react'
import { BiArrowBack, BiConversation, BiExit } from 'react-icons/bi'
import ProfilePic from '../assets/usericon.png'
import { ArrowRight, Contact, HelpCircle, IdCard, Languages } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Setting = () => {

  const navigate = useNavigate();

  const handleNext = (e) => {
  navigate("/more");
  };

  const handleLogout = (e) => {
    navigate("/logout");
  }

  const handlePrevious =(e)=>{
    navigate("/dashboard");
  }


  return (
    <div className='bg-[#E9E7E5] py-6 px-4'>
      <div className=' flex align-middle text-center'>
        <button
        onClick={handlePrevious}>
          <BiArrowBack />
        </button>
        <h2 className=' align-middle text-center m-auto text-xl font-bold'>Profile</h2>
      </div>

      <div className='flex gap-4 mt-10 align-middle'>
        <div>
          <img src={ProfilePic} alt="" className=' h-32'/>
        </div>
        <div>
          <h2 className=' text-lg font-bold'>Godknows <br />Ukari</h2>
          <p className=' text-xs'>godknowsukari@gmail.com</p>
          <p className=' text-xs'>+234 012 345 6789</p>
        </div>

      </div>

      <div className=' mt-2'>
        <h2 className=' pt-4 pb-4 text-sm font-bold'>Account Details</h2>
        
        <div className=' flex-col bg-white rounded-3xl py-6 px-4'>

          <div className='flex align-middle justify-between mb-7'>
            <div className=' flex gap-2 align-middle'>
              <IdCard />
              <p className=' text-base font-bold'>Personal Info</p>
            </div>
            <button
            onClick={handleNext}>
              <ArrowRight />
            </button>
          </div>

          <div className='flex align-middle justify-between mb-7'>
            <div className=' flex gap-2 align-middle'>
              <Languages />
              <p className=' text-base font-bold'>Language</p>
            </div>
            <button
            onClick={handleNext}>
              <ArrowRight />
            </button>
          </div>

          <div className='flex align-middle justify-between'>
            <div className=' flex gap-2 align-middle'>
              <Contact />
              <p className=' text-base font-bold'>Refer Friend</p>
            </div>
            <button
            onClick={handleNext}>
              <ArrowRight />
            </button>
          </div>

        </div>
        
      </div>

      <div className=' mt-2'>
        <h2 className=' pt-4 pb-4 text-sm font-bold'>Help and Support</h2>
      </div>

      <div className=' flex-col bg-white rounded-3xl py-6 px-4'>

          <div className='flex align-middle justify-between mb-7'>
            <div className=' flex gap-2 align-middle'>
              <HelpCircle />
              <p className=' text-base font-bold'>Help Center</p>
            </div>
            <button
            onClick={handleNext}>
              <ArrowRight />
            </button>
          </div>

          <div className='flex align-middle justify-between mb-7'>
            <div className=' flex gap-2 align-middle'>
              <BiConversation />
              <p className=' text-base font-bold'>FAQ</p>
            </div>
            <button
            onClick={handleNext}>
              <ArrowRight />
            </button>
          </div>

          <div className='flex align-middle justify-between'>
            <div className=' flex gap-2 align-middle'>
              <BiExit />
              <p className=' text-base font-bold'>Log Out</p>
            </div>
            <button
            onClick={handleLogout}>
              <ArrowRight />
            </button>
          </div>

        </div>

    </div>
  )
}

export default Setting
