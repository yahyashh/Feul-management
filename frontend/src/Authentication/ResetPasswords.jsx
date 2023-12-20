import { useState } from 'react';
import axios from "axios"

import React from 'react';
import { LeftBox } from './LeftBox';
import { SuccesResetPassword } from './SuccesResetPassword';
export function ResetPasswords() {
    const [resetPassword, setRestPassword] = useState(true)
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async (e)=>{
      e.preventDefault();
        try {
            // Check if passwords match
            if (newPassword !== confirmPassword) {
              alert('Passwords do not match');
              return;
            }
      
            // Extract token from the URL
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
      
            // Send the reset token and new password to the server
            await axios.post('http://localhost:5000/api/new-password', {
              token,
              newPassword,
            });
      console.log(token , newPassword);
            // Handle success, e.g., show a success message or redirect to login
            console.log('Password reset successful');
            setRestPassword(!resetPassword)
          } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error resetting password:', error.message);
            alert('Error resetting password');
          }
    }

    return resetPassword ? (<div className="container-fluid row  w-100 vh-100 ">
        <LeftBox />
        <form onSubmit={handleSubmit} className=' pt-2 col-12  col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center  flex-column forgetPadding gap-3  '>
            <h4 className='m-0 '>Forget Password</h4>
            <p className='m-0'>All good. Enter your account’s email address and we’ll send you a link to reset your password.</p>
            <input type="password" placeholder='New Password' className='w-100 mb-3 active w-lg-75' value={newPassword} onChange={(e)=> setNewPassword(e.target.value)}/>

            <div className=" row  w-100 ">
                <li className='col-6 m-0'>LowerCase</li>
                <li className='col-6 m-0 '>Uppercase characters.</li>
                <li className='col-6 m-0 pt-2'>Numbers</li>
                <li className='col-6 m-0 pt-2'>14 characters minimum.</li>
            </div>
            <input type="password" placeholder='emial address' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className='w-100 mb-3 active w-lg-75 ' />
            <button type='submit'>Reset Password </button>
            {/* onClick={() => setRestPassword(!resetPassword)} */}
        </form>
    </div>) : (<SuccesResetPassword />)
}
