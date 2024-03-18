import React, { useEffect,useState } from 'react'
import axios from '../utils/axios';
import '../styles/styles.scss'

const LoginPage = () => {
  //admin001@wucareer.com
  const [email,setEmail] = useState('')
  //admin001
  const [password,setPassword] = useState('')
   return (
    <div className="login">
      帳號:
      <input onChange={e=>setEmail(e.target.value)}></input>
      密碼:
      <input onChange={e=>setPassword(e.target.value)}></input>
      <button>登入</button>
    </div>
  );
};                                                            
export default LoginPage;
