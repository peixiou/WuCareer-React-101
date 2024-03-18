import React, { useEffect,useState } from 'react'
import axios from '../utils/axios';
import { useNavigate, Navigate } from "react-router-dom";
import '../styles/styles.scss'

const LoginPage = () => {
  const navigate = useNavigate();
  //admin001@wucareer.com
  const [email,setEmail] = useState('')
  //admin001
  const [password,setPassword] = useState('')
  const Login = async () => {
      if (!email || !password) return;
      const body = {
        email:email,
        password:password
      }
      const resp = await axios.post("/auth/login",body)
      if (resp) {
        localStorage.setItem("accessToken", resp.access);
        localStorage.setItem("refreshToken", resp.refresh);
        navigate("/");  
      }
  }
  if (localStorage.getItem('accessToken')) return <Navigate to="/" replace />;
  return (
    <div className="login">
      帳號:
      <input onChange={e=>setEmail(e.target.value)}></input>
      密碼:
      <input onChange={e=>setPassword(e.target.value)}></input>
      <button onClick={Login}>登入</button>
    </div>
  );
};                                                            
export default LoginPage;
