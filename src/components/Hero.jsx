import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white bg-[url(./assets/cross-border.png)] h-screen bg-cover bg-no-repeat ' id='home'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#D298D3] font-bold p-2 text-3xl'>
          Join us for
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Cross Border Payments 
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Pay
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Secure!', 'Fast!', 'with Ease!']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Link to="/dashboard"><button className='bg-[#D298D3]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Transaction</button></Link>
      </div>
    </div>
  );
};

export default Hero;