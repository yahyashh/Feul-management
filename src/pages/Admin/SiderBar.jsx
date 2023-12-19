import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';


const SiderBar = () => {
    return (
        <div className="Siderbar vh-100 p-3 ps-4 d-flex flex-column justify-content-between ">
            <div className='d-flex flex-column gaps'>
                <div className='d-flex flex-column'>
                    <div className="d-flex align-items-center gap-3 pt-2">
                        <img src="./image/Vector.png" alt="" />
                        <h5 className="m-0">Fleeto Product</h5>
                    </div>
                </div>
                <div className='d-flex flex-column siderbargap'>
                    <SidebarItem icon="./image/deshboard.png" text="Dashboard" path="/admin" />
                    <SidebarItem icon="./image/user.png" text="Create User" path="/CreateUser" />
                    <SidebarItem icon="./image/carsdetial.png" text="Create Vehicle" path="./Deshboard.jsx" />
                    <SidebarItem icon="./image/avaiblecars.png" text="Available Vehicle" path="/Dashboard" />
                    <SidebarItem icon="./image/feulrecord.png" text="View fueling record" path="/Dashboard" />
                    <SidebarItem icon="./image/histroy.png" text="User History" path="/Dashboard" />
                </div>
            </div>
            <SidebarItem icon="./image/logout.png" text="logout" path="/logout" />
        </div>
    );
}

const SidebarItem = ({ icon, text, path }) => {
    console.log(path)
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center  gap-4">
                <img src={icon} className='icons' alt="" />
                <Link to={path} className="m-0  text-decoration-none text-light ">{text}</Link>
            </div>
        </div>
    );
}

export default SiderBar;
