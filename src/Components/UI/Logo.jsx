
import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <div className='text-2xl flex  gap-0  flex-nowrap'>  
            <h2 className=" text-blue-500">Learning </h2>
            <h2 className=" text-orange-500">HUB</h2>
        </div>
        </Link>
    );
}
export default Logo;