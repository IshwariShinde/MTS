import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const LoginAdmin = () => {

    const navigate = useNavigate()
    const [userName, setUsername] =useState('')
    const [password, setPassword] =useState('')

    const handleclick = () =>{
        console.log(userName,password)
        axios.post('http://localhost:4002/login',{
            userName:userName,
            password,
            
           
        })
        .then((res) =>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err =>{
            console.log(err)
        })
    }
  return (
    <div className='loginadmin'>
        <h1>Login Admin</h1>
        <input
        type='text'
        value={userName}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Username"/>

        <input
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="password"/>

        <button onClick={handleclick}>Login</button>
    </div>
  )
}

export default LoginAdmin