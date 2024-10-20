import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

const [userData,setUserData] = useState(null);

useEffect(()=>{
    setLocalStorage();
    const { employeesData ,adminData} = getLocalStorage();
    // console.log(employeesData);
    
    setUserData({employeesData,adminData});
},[])


  return (
    <div>
        <AuthContext.Provider value={userData}>

      {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
