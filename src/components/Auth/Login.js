import React from 'react';
import { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm =(e)=>{
      e.preventDefault();
      // console.log(email,' ',password);
      handleLogin(email,password);
      setEmail('');
      setPassword('');
  }

  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center   '>
        <div className=' w-96 h-3/6  p-20 bg-gradient-to-l from-#F6416C to-#e96443 rounded-md' >
          
          <form action=""  className='flex flex-col w-full ' 
          onSubmit={(e)=>{
              submitForm(e);
          }}
          >
            <input required type="email" placeholder='Enter your email' className='my-2 p-2 px-5 text-slate-700 rounded-full'
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }
              
            }
            />
            <input required type="password" placeholder='Enter password' className='my-2 p-2 px-5 text-slate-700 rounded-full'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            />
            <button className='my-4 p-2 text-white bg-red-700 rounded-full'>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login
