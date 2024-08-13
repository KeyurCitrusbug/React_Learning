import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ShowDetails from './components/ShowDetails';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import VerifyToken from './components/VerifyToken';
import ResetPassword from './components/ResetPassword';
import { useDispatch, useSelector } from 'react-redux';
import { checklogin, logout } from './redux/UserSlice';
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, userData } = useSelector((state: RootState) => state.user);
  const [isLoading,setLoading]=useState(true)
  useEffect(() => {
    const storedUserData = localStorage.getItem('userdata');
    if (storedUserData) {
      dispatch(checklogin(JSON.parse(storedUserData)));
    } else {
      dispatch(checklogin(null));
    }
    setLoading(false)
  }, [dispatch]);
  if(isLoading)
  {
    return(
      <div>Loading</div>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset/password" element={<ForgotPassword />} />
        <Route path="/invited/signup/:token" element={<VerifyToken />} />
        <Route path="/reset/password/:token" element={<ResetPassword />} />
        <Route path="/showdetails" element={isAuthenticated ? <ShowDetails userData={userData} logout={() => dispatch(logout())} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
