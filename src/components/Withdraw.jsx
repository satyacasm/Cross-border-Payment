import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../images/add-money.webp';
import { withdrawal } from '../interact';
import image from '../images/crosspay-high-resolution-logo-transparent.png';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [metamaskAddress, setMetamaskAddress] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const handleClick = () => navigate('/dashboard');
  const handleWithdraw = async () => {
    setLoading(true); // Set loading to true when transfer starts
    await withdrawal(amount); // Assume transfer is a promise
    setLoading(false); // Set loading to false when transfer ends
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <img
          src={image}
          width={50} 
          height={50} 
          className="absolute top-4 left-4 z-10"
          alt="Logo"
        />

        <div className="w-full max-w-4xl bg-white pt-0 pr-3 pl-2 pb-2 rounded-lg shadow-xl flex min-h-[500px] mb-6 ">
        
          <div className="w-2/3 mr-8">
            <img
              src={img}
              alt="Image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          
          <div className="w-1/3 flex flex-col justify-center w-full">
            <h1 className="text-[#bd73be] mb-6 font-semibold text-2xl text-center">
             Withdraw money
            </h1>
            <form className="space-y-6 ">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Amount
                </label>

                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-[#c6c2c2]"
                  id="text"
                  type="number"
                  placeholder="******"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
           
              <div className="flex flex-col items-center justify-center">
                <button
                  className="bg-[#bd73be] hover:bg-[#D298D3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleWithdraw}
                >
                  {loading ? 'Loading...' : 'Withdraw'}
                </button>
                <h1
                  className="text-black text-bold text-md items-center justify-center mt-3  hover:text-[#D298D3]"
                  onClick={handleClick}
                >
                  Back to Dashboard
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
