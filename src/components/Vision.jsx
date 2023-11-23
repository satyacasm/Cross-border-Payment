import React from 'react';
import vision from '../assets/vision.png';

const Vision = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={vision} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#D298D3] text-xl font-bold'>Our Vision</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Vision;