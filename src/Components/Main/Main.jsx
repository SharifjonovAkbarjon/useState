import { useState } from 'preact/hooks'
import React from 'react'
import rasm from '../img/user.png'


const Main = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("")

  console.log(text);
  const handleCreate = (e) => {
    e.preventDefault()
    let object = {
      id: new Date().getTime(),
      text,
      desc,
      price
    }
    setData((prev) => [...prev, object]);
    setText("");
    setDesc("");
    setPrice("")
  };
  console.log(data);

  return (
    <>
      <form onSubmit={handleCreate} action="">
        <div className='bg-inherit rounded-lg text-center flex flex-col  w-96 gap-2'>
          <input className='p-3 w-full' required value={text} onChange={(event) => setText(event.target.value)} type="text" placeholder='Title' />
          <input className='p-3 w-full' required value={desc} onChange={(event) => setDesc(event.target.value)} type="text" placeholder='Description' />
          <input className='p-3 w-full' required value={price} onChange={(event) => setPrice(event.target.value)} type="number" placeholder='Price' />
          <button className='bg-green-700 rounded-lg text-cyan-50  w-full h-full p-3'>Create</button>
        </div>

        {/* <div>
        </div> */}


      </form>
      <div>
        <div className='flex gap-3 container'>

          {
            data?.map((item) => (
              <div className='p-6 shadow-md bg-slate-100 rounded-xl w-80 ' key={item.id}>
                <div className='w-full h-48 flex justify-center mb-3 bg-gray-200 rounded-md'>
                  <img className='flex justify-center items-center w-3/4 h-full' src={rasm} alt="" />
                </div>
                <div className='flex flex-row gap-1'>
                  <p className='text-zinc-300	font-bold'>Title:</p>
                  <p className='font-medium	font-mono '>{item.text}</p>
                </div>
                <div className='flex flex-row gap-1'>
                  <p className='text-yellow-500 font-bold'>ID:</p>
                  <span className='font-medium	font-mono 	'>{item.id}</span>
                </div>
                <div className='flex flex-row gap-1'>
                  <p className='text-green-600 font-bold'>Description:</p>
                  <p className='font-medium	font-mono '>{item.desc}</p>
                </div>
                <div className='flex flex-row gap-1'>
                  <p className='text-red-700 font-bold '>Price: $ </p>
                  <p className='font-medium font-mono '>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Main