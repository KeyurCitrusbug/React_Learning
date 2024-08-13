import React, { useReducer, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from './Input'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
type FormElement = {
    Username: string;
    FirstName:string;
    LastName:string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    ConfirmPassword: string;
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
    error: ''
}
function formReducer(state: SubmitState, action: FormAction): SubmitState {
    switch (action.type) {
        case 'SUBMIT':
            return { ...state, loading: true, error: '' }
        case 'SUCCESS':
            return { ...state, loading: false }
        case 'ERROR':
            return { ...state, loading: false, error: action.error || '' }
        default:
            return state
    }
}

function Register() {
    const apiUrl=process.env.REACT_APP_API_URL
    const { register, handleSubmit, watch,formState: { errors },reset } = useForm<FormElement>({
        mode:"onChange"
    });
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>()
    const [state, dispatch] = useReducer(formReducer, initialState)
    const [phoneNumberError,setPhoneNumberError]=useState(false)
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormElement> = async (data) => {
        if(phoneNumber===undefined || phoneNumber==="")
        {
            setPhoneNumberError(true)
        }
        else
        {
            setPhoneNumberError(false)
            console.log({ ...data, PhoneNumber: phoneNumber })
            dispatch({ type: 'SUBMIT' })
            try {
                const response = await axios.post(`${apiUrl}register/`, {
                    email: data.Email,
                    username: data.Username,
                    first_name:data.FirstName,
                    last_name:data.LastName,
                    password: data.Password
                });
                dispatch({ type: 'SUCCESS' })
                reset()
                navigate('/login')
            } catch (error:any) {
                dispatch({ type: 'ERROR', error: error.response.data.message })
            }
        }
    };

    return (
        <>
            <div className='d-flex align-items-center py-4 bg-body-tertiary h-100'>
                <div className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <Input
                            label='Username'
                            type='text'
                            error={errors.Username?.message}
                            inputProps={register("Username", { required: 'Username is required', maxLength: { value: 10, message: 'Username must be at most 10 characters' } })}
                        />
                        <Input
                            label='FirstName'
                            type='text'
                            error={errors.FirstName?.message}
                            inputProps={register("FirstName", { required: 'FirstName is required'})}
                        />
                        <Input
                            label='LastName'
                            type='text'
                            error={errors.LastName?.message}
                            inputProps={register("LastName", { required: 'LastName is required'})}
                        />
                        <Input
                            label='Email'
                            type='email'
                            error={errors.Email?.message}
                            inputProps={register("Email", { required: 'Email is required',pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                              } })}
                        />
                        <label className='text-white'>Phone Number</label>
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                        />
                        {phoneNumberError && <span className='text-danger font-weight-bolder'>Phone number is required</span>}
                        <br />
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
                        {state.error && <h3 className='text-danger font-weight-bolder'>{state.error}</h3>}
                    </form>
                    <br/>
                    <h5 className='text-center'><Link to="login" style={{textDecoration:'none'}}>Click Here to Log-In</Link></h5>
                    
                </div>    
            </div>
            
        </>
    );
}

export default Register;
