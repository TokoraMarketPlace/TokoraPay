import { ArrowDown, ArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Deposit = () => {

    const navigate = useNavigate();

    const handlePrevious = (e) => {
    navigate("/dashboard");
    };

    const handleNext = (e) => {
    navigate("/confirm-wallet");
    };

  return (
    <div className=' h-svh flex-col py-10 px-6 flex justify-between'>

      <div>

        <div className='flex text-center mt-2 mb-6'>
            <button
            onClick={handlePrevious}>
            <ArrowLeft />
            </button>

            <h2 className=' text-xl font-bold m-auto'>Add to Vendor</h2>
        </div>
        
        <div className=' flex-col align-middle bg-white rounded-xl p-6'>
            <p className=' text-xs'>Send</p> 
            <div className=' flex justify-between text-2xl'>
                <input type="number" placeholder='0.00' />
                <p className=' text-lg'>NGN</p>
            </div>
            <p className=' flex text-xs text-right justify-end'>Nigerian NairA </p>

        </div>

        <div className=' flex m-auto justify-center'>
            <ArrowDown />
        </div>

        <div className=' flex-col align-middle bg-white rounded-xl p-6'>
            <p className=' text-xs'>Recieve</p> 
            <div className=' flex justify-between text-2xl'>
                <input type="number" placeholder='0.00' />
                <p className=' text-lg'>USDC</p>
            </div>
            <p className=' flex text-xs text-right justify-end'>USDC on Base </p>

        </div>

      </div>

      <div>
            <button className='bg-orange-400 text-white font-bold py-4 rounded-xl w-full shadow-lg hover:bg-orange-500 transition-colors'
            onClick={handleNext}
            >
                Send
            </button>
       </div>

    </div>
  );
}

export default Deposit;
