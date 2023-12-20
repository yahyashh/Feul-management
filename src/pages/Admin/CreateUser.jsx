import React, { useState } from 'react'
import './createuser.css'
import AssignVehicle from './AssignVehicle'

function CreateUser() {
    const [submite, setSubmate] = useState(true)

    return (
        <>

            {submite ? <UserCreateFrom submite={submite} setSubmate={setSubmate} /> : <AssignVehicle />}
        </>)
}

export default CreateUser

function UserCreateFrom({ submite, setSubmate }) {
    return <><div className=" d-flex  align-items-center p-3 pt-4">
        <img src='./image/clogo.png' alt="" style={{ "width": "1.8rem" }} />
        <h5 className='m-0 ms-3 ' style={{ "color": "#116a7b" }}>Fleeto Product</h5></div>

        <div className='row container-fluid flexrevers '>

            <div className="col-lg-6 col-md-5 col-12  d-flex justify-content-center align-items-center flex-column gap-5">
                <img src="./image/addicon.png" alt="" style={{ "width": "9rem" }} />
                <button className='updata-image'> <img src="./image/upd-img.png" alt="" />Updata Image </button>
            </div>
            <form className="rfside col-lg-6 col-md-7 vh-75  py-1 d-flex flex-column gap-3 mt-md-5 ">
                <h5 style={{ 'fontWeight': "800", "fontSize": "1.5rem", "color": "#116a7b" }}>Create New User: </h5>
                <div className="d-flex w-100 gap-lg-5 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-2  ">
                        <label htmlFor="">Name</label>
                        <input type="text" className='inp' placeholder='Name' />
                    </div>
                    <div className="d-flex flex-column inbox gap-2">
                        <label htmlFor="">Loactions</label>
                        <input type="text" className='inp' placeholder='Loaction...' />
                    </div>
                </div>
                <div className="d-flex w-100 gap-lg-5 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-2  ">
                        <label htmlFor="">Age:</label>
                        <input type="text" className='inp' placeholder='Age' />
                    </div>
                    <div className="d-flex flex-column inbox gap-2 ">
                        <label htmlFor="">Email & phone Number: </label>
                        <input type="text" className='inp inpboxemial' placeholder='Email' />
                    </div>
                </div>
                <div className="d-flex w-100 gap-lg-5 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-2  ">
                        <label htmlFor="">Skill:</label>
                        <input type="text" className='inp' placeholder='Driver' />
                    </div>
                    <div className="d-flex flex-column inbox gap-2">
                        <label htmlFor="">Experences:</label>
                        <input type="text" className='inp ' placeholder='Experence' />
                    </div>
                </div>
                <div className="d-flex w-100 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-0 ">
                        <label htmlFor="">Language:</label>
                        <div className=" languagebox">
                            <p className='m-0'>English</p>
                            <p className='m-0'>Urdu</p>
                            <p className='m-0'>Ariaba</p>
                            <p className='m-0'>Germany</p>
                        </div>
                    </div>
                    <div className="btnbox ms-5 d-flex d-flex justify-content-start  align-items-center">
                        <button className='btnsubmate mt-4 ms-4' onClick={() => setSubmate(!submite)}>Submate</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}