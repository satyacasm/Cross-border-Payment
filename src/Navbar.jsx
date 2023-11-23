import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
    const[menu, setmenu] = useState(false);
    const handleclick=()=>{
        setmenu(!menu);
    }
  return (
    <div>
        <div className='md:fixed flex flex-row justify-center md:px-32 px-10 gap-80'>
            <div className='flex items-center p-2 '>
                <Link to ="/" spy={true} smooth ={true} duration={500}>
                    <h1 className="font-semibold text-2xl text-blue-500">SafePay</h1></Link>
            </div>
            <nav className='flex items-center p-2 gap-5'>
                <Link to ="home" spy={true} smooth ={true} duration={500} className='hover:text-blue-500 transition-all cursor-pointer'>Home</Link>
                <Link to ="learn" spy={true} smooth ={true} duration={500} className='hover:text-blue-500 transition-all cursor-pointer'>learn</Link>
                <Link to ="Transaction" spy={true} smooth ={true} duration={500} className='hover:text-blue-500 transition-all cursor-pointer'>Transaction</Link>
                <Link to ="History" spy={true} smooth ={true} duration={500} className='hover:text-blue-500 transition-all cursor-pointer'>History</Link>
                <Link to ="Contact us" spy={true} smooth ={true} duration={500} className='hover:text-blue-500 transition-all cursor-pointer'>Contact us</Link>
            </nav>
            <div className='md:hidden flex flex-col items-center p-2' onClick={handleclick}>
            <IoMdMenu size={28}/>
            </div>
            <div className={`${menu ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl text-center pt-2 pb-4 gap-8 w-full h-fit transform duration-300`}>
            <Link to ="home" spy={true} smooth ={true} duration={500}className='hover:text-blue-500 transition-all cursor-pointer'>Home</Link>
                <Link to ="learn" spy={true} smooth ={true} duration={500}className='hover:text-blue-500 transition-all cursor-pointer'>learn</Link>
                <Link to ="Transaction" spy={true} smooth ={true} duration={500}className='hover:text-blue-500 transition-all cursor-pointer'>Transaction</Link>
                <Link to ="History" spy={true} smooth ={true} duration={500}className='hover:text-blue-500 transition-all cursor-pointer'>History</Link>
                <Link to ="Contact us" spy={true} smooth ={true} duration={500}className='hover:text-blue-500 transition-all cursor-pointer'>Contact us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar