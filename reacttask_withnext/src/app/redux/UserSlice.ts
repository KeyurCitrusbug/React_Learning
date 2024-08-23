import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
};
type AuthState={
    isAuthenticated:boolean;
    userData: UserType | null;
}
const initialState:AuthState= {
  isAuthenticated: false,
  userData: null,
};
const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    login:(state, action) =>{
      state.isAuthenticated = true;
      state.userData = action.payload;
      localStorage.setItem('userdata',JSON.stringify(action.payload))
    },
    logout:(state)=>{
      state.isAuthenticated = false;
      state.userData = null;
      localStorage.removeItem('userdata')
      document.cookie = "user_data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    checklogin:(state, action)=>
    {
      state.isAuthenticated = action.payload?true:false;
      state.userData = action.payload;
      console.log(state.isAuthenticated)
    },
  },
});

export const { login, logout, checklogin } = userSlice.actions;
export default userSlice.reducer;
