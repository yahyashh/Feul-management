import React, { useState } from 'react'
import './createuser.css'
import AssignVehicle from './AssignVehicle'
import axios from 'axios'

function CreateUser() {
    const [submite, setSubmate] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        image: null,
        isAdmin: 'client', // Set the default value for isAdmin
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmate(!submite);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('address', formData.address);
        data.append('CNIC', formData.CNIC);
        data.append('image', formData.image);
        data.append('isAdmin', formData.isAdmin); // Include isAdmin in the form data

        try {
            await axios.post('http://localhost:5000/api/create', data);
            console.log('User created successfully', data);
            alert('success');

        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    };

    return (
        <>

            {submite ? <UserCreateFrom submite={submite} setSubmate={setSubmate} handleInputChange={handleInputChange}
                handleFileChange={handleFileChange} handleSubmit={handleSubmit} /> : <AssignVehicle />}

        </>)
}

export default CreateUser

function UserCreateFrom({ submite, setSubmate, handleFileChange, handleInputChange, handleSubmit }) {
    return <><div className=" d-flex  align-items-center p-3 pt-4">
        <img src='./image/clogo.png' alt="" style={{ "width": "1.8rem" }} />
        <h5 className='m-0 ms-3 ' style={{ "color": "#116a7b" }}>Fleeto Product</h5></div>

        <div className='row container-fluid flexrevers '>

            <div className="col-lg-6 col-md-5 col-12  d-flex justify-content-center align-items-center flex-column gap-5">
                <img src="./image/addicon.png" alt="" style={{ "width": "9rem" }} />
                <input
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
                <button onClick={() => document.querySelector('input[type="file"]').click()}
                    className='updata-image'> <img src="./image/upd-img.png" alt="" />Updata Image </button>
            </div>
            <form onSubmit={handleSubmit} className="rfside col-lg-6 col-md-7 vh-75  py-1 d-flex flex-column gap-3 mt-md-5 ">
                <h5 style={{ 'fontWeight': "800", "fontSize": "1.5rem", "color": "#116a7b" }}>Create New User: </h5>
                <div className="d-flex w-100 gap-lg-5 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-2  ">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" className='inp' placeholder='Name' onChange={handleInputChange} />
                    </div>
                    <div className="d-flex flex-column inbox gap-2">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" className='inp' placeholder='Email' onChange={handleInputChange} />
                    </div>
                </div>
                <div className="d-flex w-100 gap-lg-5 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-2  ">
                        <label htmlFor="">Password</label>
                        <input type="text" name='password' className='inp' placeholder='Passworf' onChange={handleInputChange} />
                    </div>
                    <div className="d-flex flex-column inbox gap-2 ">
                        <label htmlFor="">Phone Number: </label>
                        <input type="number" name='phoneNumber' className='inp inpboxemial' placeholder='Phone' onChange={handleInputChange} />
                    </div>
                </div>
                <div className="d-flex w-100 gap-lg-5 flex-wrap customgap">
                    <div className=" d-flex flex-column inpbox gap-2  ">
                        <label htmlFor="">CNIC</label>
                        <input type="text" name='CNIC' className='inp' placeholder='CNIC' onChange={handleInputChange} />
                    </div>
                    <div className="d-flex flex-column inbox gap-2">
                        <label htmlFor="">Address</label>
                        <input type="text" name='address' className='inp ' placeholder='Address' onChange={handleInputChange} />
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
                        <button className='btnsubmate mt-4 ms-4' type='submit'>Submate</button>
                        {/* onClick={() => setSubmate(!submite)} */}
                    </div>
                </div>
            </form>
        </div>
    </>
}