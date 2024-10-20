import React from 'react'

const CreateTask = () => {
  return (
      <div className=' bg-[#1c1c1c] mx-10'>
    
    <form action="" className='flex justify-between p-10'>

    <div className='w-1/3'>
        <h2 className=' mb-1'>Track Title</h2>
        <input type="text" placeholder='Make a UI design' className='w-full rounded-md  bg-zinc-700 p-1 '/>
        
        <h2 className='mt-3 mb-1' >Date</h2>
        <input type="date"  className='w-full rounded-md  bg-zinc-700 p-1 '/>
        <h2 className='mt-3 mb-1'>Asign To</h2>
        <input type="text" placeholder='Employee Name' className='w-full rounded-md  bg-zinc-700 p-1 '/>
        <h2 className='mt-3 mb-1'>Category</h2>
        <input type="text" placeholder='design, dev, etc' className='w-full rounded-md  bg-zinc-700 p-1 '/>

    </div>

    <div  className='flex flex-col w-1/3'>
        <h2 className='text-xl'>Description</h2>
        <textarea name="" id="" className='h-40 my-4'></textarea>
        <button className='w-full bg-green-500 p-2 rounded-xl mt-2'>Create Task</button>
    </div>

    </form>

    </div>
  )
}

export default CreateTask
