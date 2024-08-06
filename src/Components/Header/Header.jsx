import { render } from 'preact';
import React, { useState } from 'react'

console.log("Header render outside");


const Header = () => {
    const [offset, setOffset] = useState(1) // return array [value, function]
    console.log("Header render inside");

    const handleClick = ()=>{
        setOffset((prev)=> prev+1 )
    }
  return (
    <div className='none'>
        <button onClick={handleClick} className='bg-green-500 w-64 p-3 rounded-lg'>increment</button>
        <br />
        <br />
        <button disabled={offset <=1} onClick={()=> setOffset(p=> p-1)} className='bg-red-500 p-3 rounded-lg'>deccrement</button>
        <br />
        <br />
        <button onClick={()=> setOffset(0)} className='p-5 rounded-xl w-20  bg-yellow-300'>reset</button>
    </div>
  )
}

export default Header
 