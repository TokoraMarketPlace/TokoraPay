import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Moresettimg = () => {

    const navigate = useNavigate();

    const handlePrevious = (e) => {
      navigate("/settings");
    };

  return (
    <div className= 'flex-col px-4 py-8 h-screen'>
      <div className='flex'>
        <button 
        onClick={handlePrevious}>
          <ArrowLeft />
        </button>
        <h2 className=' text-xl font-bold m-auto'>Setting</h2>
      </div>
      <div className=' flex-col gap-4 mt-44'>
        <h2 className=' text-xs font-bold px-6 mb-4'>More Setting</h2>
        <div className=' h-96 w-5/6 bg-white rounded-xl m-auto'>

        </div>
      </div>
    </div>
  );
}

export default Moresettimg;