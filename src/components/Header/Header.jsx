import React from 'react';
import logo from './logo/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
       <div className='flex justify-around p-4'>
        {/* logo */}
        <div>
           <img src={logo} alt='logo' className='w-50'/>
        </div>

        {/* navigation */}

        <div className='w-[50%]'>
            <ul className=' flex justify-evenly mt-3 items-center'>
                <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold '><Link to='/'>Home</Link></li>
                <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold '><Link to='/manage-booking'>Manage Bookings</Link></li>
                <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold '><Link to='/bus-hire'>Bus hire</Link></li>
                <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold '><Link to='/track-cargo'>Track cargo</Link></li>
                <li className='bg-yellow-500 px-2 py-1 rounded-sm '><Link to='/sign-in'>Sign in</Link></li>
            </ul>
             
        </div>

       </div>
    </>
  )
}

export default Header