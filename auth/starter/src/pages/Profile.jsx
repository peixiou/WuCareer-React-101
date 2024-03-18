import { useEffect, useState } from 'react';
import axios from '../utils/axios'

const Profile = () => {
  const [profile,setProfile] = useState()
  return (
    <div>
      <h1>Profile</h1>
      <p>id:</p>
      <p>roles:</p>
    </div>
  );
};
export default Profile;
  