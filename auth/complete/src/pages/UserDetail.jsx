import { useEffect } from 'react';
import axios from '../utils/axios'
const UserDetail = () => {
  const getUserDetail = () => {
    const body = {
      jwt:localStorage.getItem('user').access
    }
    axios.post("/account/1",body).then((response)=>{console.log(response)})
  }
  useEffect(()=>{
    getUserDetail()
  },[])
  return (
    <div>
      <h1>User</h1>
    </div>
  );
};
export default UserDetail;
  