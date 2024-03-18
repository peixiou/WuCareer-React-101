import { useEffect, useState } from 'react';
import axios from '../utils/axios'
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [profile,setProfile] = useState()
  const getProfile = () => {
    axios("/profile").then((response)=>{
      setProfile(response.user)
    }).catch((err)=>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      navigate('/')
    })
  }
  useEffect(()=>{
    getProfile()
  },[])
  return (
    <div>
      <h1>Profile</h1>
      <p>id: {profile?.user_name} </p>
      <p>roles: {profile?.roles.map(role=>{return(<span>{role},</span>)})}</p>
    </div>
  );
};
export default Profile;
  