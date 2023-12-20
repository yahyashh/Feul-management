import React from 'react'
import './ForgetPassword.css';
import { LeftBox } from './LeftBox'
import { useState } from 'react';
import { ResetPasswords } from './ResetPasswords';
import Login from './Login';
import axios from "axios"

export function ForgetPassword() {
    const [email, setEmail] = useState("")
    const [returnlogin, setReturnLogin] = useState(true)
    const [proced, setProced] = useState(true)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/reset-password', { email });
            alert('Password reset email sent. Check your inbox.');
            console.log(proced);
            setProced(!proced)
          } catch (error) {
            console.error('Error requesting password reset:', error.response.data.error);
            alert('Error requesting password reset. Please try again.');
          }
        };


    return proced ? (<ForgetPasswords email={email} setEmail={setEmail} handleSubmit={handleSubmit} proced={proced} setProced={setProced} returnlogin={returnlogin} setReturnLogin={setReturnLogin} />) : (<ResetPasswords />)
}

function ForgetPasswords({ setProced, proced, returnlogin, setReturnLogin, email, setEmail, handleSubmit }) {
    // onClick={() => setProced(!proced)}
    return returnlogin ? (<div className="container-fluid row  w-100 vh-100 ">
        <LeftBox />
        <form onSubmit={handleSubmit} className=' pt-2 col-12  col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center  flex-column forgetPadding gap-3  '>
            <h4 className='m-0 '>Forget Password</h4>
            <p className='m-0'>All good. Enter your account’s email address and we’ll send you a link to reset your password.</p>
            <input type="email" placeholder='emial address' className='w-100 mb-3 active w-lg-75 ' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <button type='submit'>Send Link Rest</button>
        </form>
            <div className="d-flex justify-content-center align-items-center gap-2 "><iconify-icon icon="bi:arrow-left "></iconify-icon> <button className='m-0 forgetbtn ' onClick={() => setReturnLogin(!returnlogin)}>Return to Login</button></div>

    </div>) : (<Login />)
}


