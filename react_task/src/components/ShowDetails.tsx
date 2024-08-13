import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/UserSlice';
import { RootState } from '../redux/store';

type UserType={
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

type PropsType ={
  userData: UserType | null;
  logout:()=>void
}

function ShowDetails({ userData }: PropsType) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className='py-4 bg-body-tertiary h-100'>
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
