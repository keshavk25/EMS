import React from 'react'

const NewTask = () => {
  return (
    <div className='bg-green-500 w-1/4 h-[85%] mt-5 rounded-xl flex-shrink-0 p-5'>
    <div className='flex justify-between '>
        <h1 className='bg-red-600 text-white px-2'>High</h1>
        <h1>10 oct 24</h1>
    </div>
    <h1 className='my-4'>TITLE</h1>
    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, quas.</h2>
    <div className='mt-4 flex justify-between'> 
        <button className='bg-green-600 p-1 rounded-md'>Accepted</button>
        
     </div>
</div>
  )
}

export default NewTask
