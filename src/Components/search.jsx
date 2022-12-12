import React from 'react'
import { UilSeacrh, UilLocationPoint } from '@iconscout/react-unicons/icons/uil-react'

function search() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                type="text"
                className="w-full h-10 px-5 pr-10 text-sm text-gray-700 placeholder-gray-400 bg-white rounded-full focus:outline-none focus:shadow-outline"
                placeholder="Search for city" 
            />
            <UilSeacrh 
                size={25}
                className=' text-white hover:scale-125 transition ease-out cursor-pointer' 
            />
            <UilLocationPoint 
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
            />
        </div>

            <div className=''> </div>

    </div>
  );
}

export default search