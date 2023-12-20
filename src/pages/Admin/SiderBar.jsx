
import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SiderBar = () => {
    const [showText, setShowText] = useState(true);

    const handleLogoClick = () => {
        setShowText(!showText);
    };

    return (
        <div className={`${showText ? 'Siderbar' : 'Sidebar'} vh-100 p-3 ps-4 d-flex flex-column justify-content-between `}>
            <div className='d-flex flex-column gaps'>
                <div className='d-flex flex-column'>
                    <div className="d-flex align-items-center gap-3 pt-2 ">
                        <img src="./image/Vector.png" alt="" onClick={handleLogoClick} className="cursor-pointer" />
                        {showText && <h5 className="m-0">Fleeto Product</h5>}
                    </div>
                </div>
                <div className='d-flex flex-column siderbargap'>
                    <SidebarItem icon="./image/deshboard.png" text="Dashboard" path="/admin" showText={showText} />
                    <SidebarItem icon="./image/user.png" text="Create User" path="/CreateUser" showText={showText} />
                    {/* <SidebarItem icon="./image/carsdetial.png" text="Create Vehicle" path="./Deshboard.jsx" showText={showText} /> */}
                    <SidebarItem icon="./image/avaiblecars.png" text="Vehicle Detial" path="/VehicleDetial" showText={showText} />
                    {/* <SidebarItem icon="./image/feulrecord.png" text="View fueling record" path="/Dashboard" showText={showText} /> */}
                    {/* <SidebarItem icon="./image/histroy.png" text="User History" path="/Dashboard" showText={showText} /> */}
                </div>
            </div>
            <SidebarItem icon="./image/logout.png" text="Logout" path="/logout" showText={showText} />
        </div>
    );
}



const SidebarItem = ({ icon, text, path, showText }) => {
    console.log(path)
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center  gap-4">
                <Link to={path} ><img src={icon} className='icons' alt="" /></Link>
                {showText && <Link to={path} className="m-0  text-decoration-none text-light ">{text}</Link>}
            </div>
        </div>
    );
}

export default SiderBar;
