import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = ({data}) => {
  return (
    <div>
      <Header data={data}/>
      <CreateTask data={data}/>
      <AllTask data={data}/>
    
    </div>
  )
}

export default AdminDashboard
