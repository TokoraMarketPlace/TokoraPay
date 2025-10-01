import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { TbDoorExit } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    const handlePrevious = (e) => {
        navigate("/settings");
    };

    const handleLogout = (e) => {
        navigate("/signup");
    };

  return (
      <div className=' h-screen flex-col px-4 py-8 '>
        <div className='flex'>
            <button
            onClick={handlePrevious}>
                <ArrowLeft />
            </button>
            <h2 className=' text-xl font-bold m-auto mb-4'>Log Out</h2>
        </div>

        <div className=' bg-white rounded-3xl p-6 flex-col justify-center align-middle m-auto mt-48'>
            <TbDoorExit  size={60} className=' m-auto' />
            <h2 className=' m-auto text-center mt-4 text-2xl font-bold'>Are you logging <br /> out?</h2>
            <p className=' mt-2 text-center align-middle'>You can always log back in at any time, if you just want to switch accounts. you can <a href="/login" className=' underline'>add another account.</a></p>
            <div className='flex justify-evenly'>
                <button
                onClick={handlePrevious}
                className='className="flex-1 mt-8 text-black bg-orange-200 rounded-full py-2 font-semibold flex items-center justify-center px-12 text-lg'>
                    Cancel
                </button>
                <button
                onClick={handleLogout}
                className='className="flex-1 mt-8 text-white bg-orange-400 rounded-full py-2 font-semibold flex items-center justify-center px-12 text-lg'>
                    Logout
                </button>
        </div>
        </div>
        
      </div>
  );
}

export default Logout;
