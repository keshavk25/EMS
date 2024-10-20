import React from 'react'
import AcceptTask from './AcceptTask'
import CompletedTask from './CompletedTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    // console.log(data.tasks)
  return (
      <div id='taskList' className='h-80 mt-10 w-screen flex justify-start gap-5  px-10 overflow-x-auto'>
        
       { data.tasks.map((emp,id)=>{

        if(emp.newTask){
        return <NewTask key={id}/>
        }

        if(emp.active){
        return <AcceptTask key={id}/>
        }

        if(emp.completed){
         return <CompletedTask key={id}/>
        }


        if(emp.failed){
        return <FailedTask key={id}/>
        }
       })
       
      }

      
      </div>

  )
}

export default TaskList
