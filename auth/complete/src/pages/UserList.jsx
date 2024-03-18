import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'
import '../styles/styles.scss'
const UserList = () => {
  const navigate = useNavigate();
  const [userList,setUserList] = useState([])
  const getUserList = () => {
    axios.get("/account").then((response)=>{
      setUserList(response.user)
    }).catch(err=>{
      window.alert('無權限')
      navigate("/");  
    })
  }
  useEffect(()=>{
    getUserList()
  },[])
  return (
    <div>
      <h1>User Table</h1>
      <table className="user-table">
        <tr>
          <th>id</th>
          <th>userName</th>
          <th>admin</th>
        </tr>
        {
          userList.map(user=>{
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.user_name}</td>
                <td>{user.roles.find(role=>role==='admin')?'Y':'N'}</td>
              </tr>
            )
          })
        }
      </table>
      
    </div>
  );
};
export default UserList;
  