"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/UserSlice';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
type UserType = {
  tokens: {
    access: string;
    refresh: string;
  };
  user: {
    email: string;
    first_name: string;
    id: string;
    is_verified: boolean;
    last_name: string;
    username: string;
  };
}

function ShowDetails() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserType | null>(null);
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("userdata");
    if (user) {
      setUserData(JSON.parse(user) as UserType);
    }
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <div className='py-4 bg-body-dark h-100'>
      <h5 className='text-center fw-bold text-white'>Email: {userData?.user.email}</h5>
      <h5 className='text-center fw-bold text-white'>Username: {userData?.user.username}</h5>
      <h5 className='text-center fw-bold text-white'>FirstName: {userData?.user.first_name}</h5>
      <h5 className='text-center fw-bold text-white'>LastName: {userData?.user.last_name}</h5>
      <h5 className='text-center fw-bold text-white'>UserID: {userData?.user.id}</h5>
      <div className='d-flex justify-content-center'>
        <button type="button" className='btn btn-success btn-lg' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ShowDetails;
