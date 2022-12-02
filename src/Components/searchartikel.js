import { Button, IconButton } from '@material-tailwind/react';
import React from 'react';

function SearchArticle() {
    return (
        <div className="flex items-center">
            <div className="">
                <input
                    type="text"
                    className=" px-4 py-2  bg-white border  focus:ring-opacity-40"
                    placeholder="Search"
                />
                
                <button className='px-2 py-2 text-gray-100  bg-blue-500  '>
                    Search
                </button>
            </div>
        
            
            
        </div>
    );
         
}

export default SearchArticle;