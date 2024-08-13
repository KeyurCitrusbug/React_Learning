import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputFieldProps = {
    label: string;
    type: string;
    error?: string;
    inputProps: UseFormRegisterReturn;
}

function Input({ label, type, error, inputProps }: InputFieldProps) {
    return (
        <>
            <div className="mb-3 form-floating">
                <input
                    {...inputProps}
                    type={type}
                    className="form-control"
                    id={label}
                    placeholder={`Enter your ${label}`}
                />
                <label htmlFor={label}>{label}</label>
                {error && <span className='text-danger font-weight-bolder'>{error}</span>}
            </div>
        </>
    );
}

export default Input;
