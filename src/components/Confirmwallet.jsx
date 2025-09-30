import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Confirmwallet = () => {


  
  const navigate = useNavigate();

  const handleNext = (e) => {

    navigate("/send");
  };

  return (
    <div className=' flex-col gap-8 p-9 justify-center m-auto mt-96 bg-slate-100 h-screen rounded-lg'>

      <div className='w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-10 cursor-pointer'>
      </div>

      <div className=' flex justify-center p-7 bg-gray-200 h-28 w-28 rounded-full m-auto'>
        <FaBuilding 
        color='grey'
        size={50}/>
      </div>
      <div className=' flex-col justify-between m-aut text-center mt-6'>

        <h2 className=' text-2xl font-bold'>Vendor's Name</h2>

        <p className=' text-sm mt-2'>You're sending to <b>Vendor's Name <br /> (Vendor's Bank)</b>. Is this correct</p>
      </div>

      <div className=' flex justify-between mt-16 gap-8'>
        <button className='flex-1 bg-orange-200 text-black rounded-full py-3 font-semibold flex items-center justify-center gap-3 text-lg'>
          Cancel
        </button>

        <button
        onClick={handleNext}
         className='flex-1 bg-orange-400 text-white rounded-full py-3 font-semibold flex items-center justify-center gap-3 text-lg'>
          Confirm
        </button>
      </div>

    </div>
  );
}

export default Confirmwallet;
