import React from 'react'

const Header = ({data}) => {


const handleLogOut =()=>{
  localStorage.setItem("loggedUser",'' );
  window.location.reload();
  
}
  
  return (
    <div className=' flex justify-between  text-white p-5'>
      <div className='ml-5'>
        <h1 className='text-2xl'> Hello <br/> <span className='text-3xl'>{data.name}🖐️</span></h1>
      </div>
      <div className='mr-5'>
        <button onClick={handleLogOut} className='bg-red-500 px-3 py-2 rounded-md mt-4'>  Log Out</button>
      </div>
    </div>
  )
}

export default Header
