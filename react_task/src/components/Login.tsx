import React, { useEffect, useReducer } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/UserSlice'
type FormElement = {
  Email: string;
  Password: string;
}
type FormAction = {
  type: string;
  error?: string;
}
type SubmitState = {
  loading: boolean;
  error: string;
}
const initialState: SubmitState = {
  loading: false,
  error: '',
}
function formReducer(state: SubmitState, action: FormAction): SubmitState {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, loading: true, error: '' };
    case 'SUCCESS':
      return { ...state, loading: false };
    case 'ERROR':
      return { ...state, loading: false, error: action.error || '' };
    default:
      return state;
  }
}
function Login() {
  const apiUrl=process.env.REACT_APP_API_URL
  console.log('api==',apiUrl)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormElement>({ mode: "onChange" })
  const [state, dispatchForm] = useReducer(formReducer, initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormElement> = async (data) => {
    dispatchForm({ type: 'SUBMIT' })
    try {
      const response = await axios.post(`${apiUrl}login/`, {
        email: data.Email,
        password: data.Password
      });
      dispatch(login(response.data.payload))
      dispatchForm({ type: 'SUCCESS' })
      reset()
      navigate('/showdetails')
    } catch (error: any) {
      dispatchForm({ type: 'ERROR', error: error.response.data.message })
    }
  }
  useEffect(()=>{
    const storedUserData = localStorage.getItem('userdata');
    if (storedUserData) {
      navigate('/showdetails')
    } else {
      navigate('/login')
    }
  },[])
  return (
    <div className='d-flex align-items-center py-4 bg-body-tertiary h-100'>
      <div className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Input
            label='Email'
            type='email'
            error={errors.Email?.message}
            inputProps={register("Email", { required: 'Email is required',pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            } })}
          />
          <Input
            label='Password'
            type='password'
            error={errors.Password?.message}
            inputProps={register("Password", { required: 'Password is required' })}
          />
          <div className='d-flex justify-content-center'>
            <button type="submit" disabled={state.loading} className='btn btn-success btn-lg'>
              Submit
            </button>
          </div>
        </form>
        {state.error && <h3 className='text-danger font-weight-bolder text-center'>{state.error}</h3>}
        <h3 className='text-center mt-4'><Link to="/" style={{ textDecoration: 'none' }}>Click Here to Register</Link></h3>
        <h5 className='text-center'><Link to="/forgot-password" style={{textDecoration:'none'}} className='text-info'>Forgot Password?</Link></h5>
      </div>
    </div>
  );
}

export default Login;
