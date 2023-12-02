import React from 'react';
import { useState } from 'react';
import Login from './Login';
import { LeftBox } from './LeftBox';


export function SuccesResetPassword() {
    const [returnLogin, setReturnLogin] = useState(true);
    return returnLogin ? (
        <div className="container-fluid row  w-100 vh-100 ">
            <LeftBox />
            <div className=' pt-2 col-12  col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center  flex-column forgetPadding text-center gap-2  '>
                <img src='./image/succes.png ' className='img-fluid' alt="" />
                <h3 className='fw-bold'>Succes</h3>
                <p>Your password has been update and is secure. You can now login to again.</p>
                <button onClick={() => setReturnLogin(!returnLogin)}>Return Login</button>
            </div>
        </div>
    ) : (<Login />);
}
