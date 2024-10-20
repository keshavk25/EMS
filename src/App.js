import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  // localStorage.clear();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);


  const authData = useContext(AuthContext);
  useEffect(()=>{
      const loggedUser = localStorage.getItem("loggedUser");
      
      if(loggedUser){
        const userData = JSON.parse(loggedUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      }
  },[])

  
  const handleLogin = (email, password) => {
 
        if(email=="admin@me.com" && password==123){
          setLoggedInUserData(authData.adminData);
          setUser("admin");
          
          localStorage.setItem("loggedUser", JSON.stringify({ role: "admin" ,data:authData.adminData}));
        }
    

    else if (authData) {
      const empData = authData.employeesData.find(
        (e) => email == e.email && password == e.password );
      if (empData) {
        
        setLoggedInUserData(empData);
        
        setUser("employee"); 
        localStorage.setItem("loggedUser", JSON.stringify({ role: "employee",data : empData}));
       
        
      }
    }
     else alert("invalid credential");
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

{user == "admin" ? ( <AdminDashboard data={loggedInUserData}/> ) : user == "employee" ? (<EmployeeDashboard data={loggedInUserData}/> ) : ( "" )};
    </div>
  );
};

export default App;
