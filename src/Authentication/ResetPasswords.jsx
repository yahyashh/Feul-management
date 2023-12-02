import { useState } from 'react';


import React from 'react';
import { LeftBox } from './LeftBox';
import { SuccesResetPassword } from './SuccesResetPassword';
export function ResetPasswords() {
    const [resetPassword, setRestPassword] = useState(true)
    return resetPassword ? (<div className="container-fluid row  w-100 vh-100 ">
        <LeftBox />
        <div className=' pt-2 col-12  col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center  flex-column forgetPadding gap-3  '>
            <h4 className='m-0 '>Forget Password</h4>
            <p className='m-0'>All good. Enter your account’s email address and we’ll send you a link to reset your password.</p>
            <input type="password" placeholder='New Password' className='w-100 mb-3 active w-lg-75 ' />

            <div className=" row  w-100 ">
                <li className='col-6 m-0'>LowerCase</li>
                <li className='col-6 m-0 '>Uppercase characters.</li>
                <li className='col-6 m-0 pt-2'>Numbers</li>
                <li className='col-6 m-0 pt-2'>14 characters minimum.</li>
            </div>
            <input type="password" placeholder='emial address' className='w-100 mb-3 active w-lg-75 ' />
            <button onClick={() => setRestPassword(!resetPassword)}>Reset Password </button>
        </div>
    </div>) : (<SuccesResetPassword />)
}
