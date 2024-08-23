"use client";
import React, { useEffect, useReducer } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { login } from '../redux/UserSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCookies } from 'next-client-cookies';
type FormElement = {
  Email: string;
  Password: string;
};

type FormAction = {
  type: string;
  error?: string;
};

type SubmitState = {
  loading: boolean;
  error: string;
};

const initialState: SubmitState = {
  loading: false,
  error: '',
};

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
  const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormElement>({ mode: "onChange" });
  const [state, dispatchForm] = useReducer(formReducer, initialState);
  const dispatch = useDispatch();
  const router = useRouter();
  const cookies = useCookies();
  const onSubmit: SubmitHandler<FormElement> = async (data) => {
    dispatchForm({ type: 'SUBMIT' });
    try {
      const response = await axios.post(`${apiUrl}login/`, {
        email: data.Email,
        password: data.Password
      });
      dispatch(login(response.data.payload));
      dispatchForm({ type: 'SUCCESS' });
      reset();
      document.cookie="user_data="+JSON.stringify(response.data.payload)
      router.push('/showdetails');
    } catch (error: any) {
      dispatchForm({ type: 'ERROR', error: error.response?.data?.message || 'Login failed' });
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userdata');
    if (storedUserData) {
      router.push('/showdetails');
    }
  }, [router]);

  return (
    <div className='d-flex align-items-center py-4 bg-body-dark h-100'>
      <div className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Input
            label='Email'
            type='email'
            error={errors.Email?.message}
            inputProps={register("Email", { required: 'Email is required', pattern: {
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
        <h5 className='text-center'><Link href="/" style={{textDecoration:'none'}}>Click Here to Register</Link></h5>
        <h5 className='text-center'><Link href="/forgot-password" style={{textDecoration:'none'}} className='text-info'>Forgot Password?</Link></h5>
      </div>
    </div>
  );
}

export default Login;
