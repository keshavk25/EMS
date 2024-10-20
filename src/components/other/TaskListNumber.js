import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='p-10 flex gap-5 w-screen'>
      <div className='bg-red-500 w-[45%] p-10  text-white rounded-xl' >
        <h1 className='text-3xl font-semibold'>{data.tasksCount.active}</h1>
        <h1 className='text-xl font-bold' >Active Task</h1>
      </div>
      <div className='bg-green-500 w-[45%] p-10  text-white rounded-xl' >
        <h1 className='text-3xl font-semibold'>{data.tasksCount.newTask}</h1>
        <h1 className='text-xl font-bold' >New Task</h1>
      </div>
      <div className='bg-yellow-500 w-[45%] p-10  text-white rounded-xl' >
        <h1 className='text-3xl font-semibold'>{data.tasksCount.completed}</h1>
        <h1 className='text-xl font-bold' >Completed task</h1>
      </div>
      <div className='bg-blue-500 w-[45%] p-10  text-white rounded-xl' >
        <h1 className='text-3xl font-semibold'>{data.tasksCount.failed}</h1>
        <h1 className='text-xl font-bold' >Failed task</h1>
      </div>
    </div>
  )
}

export default TaskListNumber
