"use client"
import React, { useReducer } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Input from '../../../components/Input';
type FormElement = {
    Password: string;
    ConfirmPassword:string;
}
type FormAction = {
  type: string;
  error?: string;
  success?:string;
}
type SubmitState = {
  loading: boolean;
  error: string;
  success?:string
}
const initialState: SubmitState = {
  loading: false,
  error: '',
}
function formReducer(state: SubmitState, action: FormAction): SubmitState {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, loading: true, error: '' }
    case 'SUCCESS':
      return { ...state, loading: false,success:action.success }
    case 'ERROR':
      return { ...state, loading: false, error: action.error || '' }
    default:
      return state
  }
}
type Props={
    params:{
        token:string
    }
}
function ResetPassword({ params }: Props) 
{
  const apiUrl=process.env.NEXT_PUBLIC_REACT_APP_API_URL
  const { register, handleSubmit,watch, formState: { errors }, reset } = useForm<FormElement>({ mode: "onChange" })
  const [state, dispatch] = useReducer(formReducer, initialState)

  const onSubmit: SubmitHandler<FormElement> = async (data) => {
    dispatch({ type: 'SUBMIT' })
    try {
      const response = await axios.post(`${apiUrl}reset-forgot-password/${params.token}/`, {
        password: data.Password
      });
      dispatch({ type: 'SUCCESS',success:response.data.message })
      reset();
    } catch (error: any) {
      dispatch({ type: 'ERROR', error: error.response.data.message })
    }
  }

  return (
    <div className='d-flex align-items-center py-4 bg-body-dark h-100'>
      <div className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input
                            label='Password'
                            type='password'
                            error={errors.Password?.message}
                            inputProps={register("Password", { required: 'Password is required',pattern: {
                                value: /^(?=.*\d.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?/~`-]).{8,}$/,
                                message: 'Use Strong Password',
                              } })}
                        />
                        <Input
                            label='Confirm Password'
                            type='password'
                            error={errors.ConfirmPassword?.message}
                            inputProps={register("ConfirmPassword", { required: 'Confirm Password is required',validate: (val: string) => {
                                if (watch('Password') !== val) {
                                  return "Your passwords do no match";
                                }
                              }, })}
                        />
          <div className='d-flex justify-content-center'>
            <button type="submit" disabled={state.loading} className='btn btn-success btn-lg'>
              Submit
            </button>
          </div>
        </form>
        {state.error && <h3 className='text-danger font-weight-bolder text-center'>{state.error}</h3>}
        {state.success && <h3 className='text-success font-weight-bolder text-center'>{state.success}</h3>}
      </div>
    </div>
  );
}

export default ResetPassword;
