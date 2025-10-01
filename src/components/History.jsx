import React from 'react'
import TransactionRow from "./TransactionRow";
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';


const dummyTransactions = [
  { id: 1, type: "sent", name: "Esimvie Izu", amount: "1,500 USDC", ngn: "2,280,000 NGN", time: "5:43 PM" },
  { id: 2, type: "received", name: "Elisha Adewuyi", amount: "15,000 USDC", ngn: "22,800,000 NGN", time: "21 AUG 2025 | 11:32 AM" },
  { id: 3, type: "sent", name: "Oviemeya Adedeji", amount: "800 USDC", ngn: "1,216,000 NGN", time: "18 AUG 2025 | 7:08 AM" },
  { id: 4, type: "sent", name: "Samuel Ekpo", amount: "60 USDC", ngn: "91,200 NGN", time: "15 AUG 2025 | 12:21 PM" },
  { id: 5, type: "received", name: "Tosin Femi", amount: "3,200 USDC", ngn: "4,992,000 NGN", time: "14 AUG 2025 | 2:15 PM" },
  { id: 6, type: "sent", name: "Chinedu Okeke", amount: "900 USDC", ngn: "1,404,000 NGN", time: "12 AUG 2025 | 9:00 AM" },
  { id: 7, type: "received", name: "Aisha Bello", amount: "5,000 USDC", ngn: "7,800,000 NGN", time: "10 AUG 2025 | 11:45 AM" },
  { id: 8, type: "sent", name: "Femi Ade", amount: "120 USDC", ngn: "187,200 NGN", time: "09 AUG 2025 | 4:30 PM" },
];

const History = () => {
    
  const navigate = useNavigate();

  const handlePrevious = (e) => {
  navigate("/dashboard");
  };

  return (
    
    <div className=' overflow-y-auto'>
      <div className="fixed left-0 right-0 bottom-0 top-0 z-30 flex flex-col">
          {/* Panel */}
          <div className="flex-1 bg-[#E9E7E5] p-4 overflow-auto rounded-t-3xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div
              className=" cursor-pointer"
              onClick={handlePrevious}
             ><BiArrowBack /></div>
              <h3 className="text-xl font-bold justify-center text-center m-auto p-6">Transaction</h3>
            </div>

            <div className=' flex p-2 bg-white rounded-full gap-4 m-4'>
              <Search />
              <input type="text" placeholder='Search transfers...' />
            </div>

            <div className="flex flex-col gap-3">
              {dummyTransactions.slice(0, 8).map((tx) => (
                <TransactionRow key={tx.id} tx={tx} />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default History;