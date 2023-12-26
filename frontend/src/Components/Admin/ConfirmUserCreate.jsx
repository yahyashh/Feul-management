import React, { useState } from 'react'
import AssignVehicle from './AssignVehicle';

function ConfirmUserCreate() {
    const [assign, setAssign] = useState(true);
    return (
        assign ? (<div className='vh-100 w-100 row' >
            <div className=" d-flex  align-items-center  col-12 ps-4" style={{ "marginTop": "-.5rem" }}>
                <img src='./image/clogo.png ' alt="" style={{ "width": "1.8rem" }} />
                <h5 className='m-0 ms-3' style={{ "color": "#116a7b" }}>Fleeto Product</h5>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center px-5 ">
                <img src='./image/assign.png ' style={{ "width": "31rem" }} alt="" className='img-fluid' />
            </div>
            <div className="col-6 col-6 d-flex justify-content-center align-items-center px-5 flex-column gap-4  " style={{ "marginTop": "-4rem" }} >
                <img src='./image/submateicon.png' alt="" style={{ "width": "5rem" }} />
                <h4 className='m-0'>User Create Successfully </h4>
                <button className='p-3 px-4 outline-0 border-0  rounded-5 ' style={{ "backgroundColor": "#116a7b", "color": "white" }}
                    onClick={() => setAssign(!assign)}>Assign Vehicle</button>
            </div>
        </div>) : (<AssignVehicle />))
}

export default ConfirmUserCreate
