import SiderBar from "./SiderBar"
import React, { useEffect, useState } from 'react';
import "./assign.css"
import axios from "axios"
import { useHistory } from 'react-router-dom'


function AssignVehicle() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users-with-wehical');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users with wehical data:', error.message);
            }
        };

        fetchUsers();
    }, []);

    return <div className='w-100 d-flex  overflow-hidden '><SiderBar showText={true} />
        <AssignVehicleTable users={users} />
    </div>

}
function AssignVehicleTable({ users }) {
    return (
        <div className="d-flex flex-column w-100  gap-4 p-sm-4 p-lg-4  ps-2 pt-3 vh-100 forsiderpadding  overflow-hidden">
            <div className="d-flex  justify-content-between align-items-center ">
                <h2 className=' h2vehicledetialm-0'>Vehicle Detials</h2>
                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="d-flex justify-content-start align-items-center w-100 seainp gap-2 gap-lg-4 gap-sm-4 gap- flex-wrap">
                <input type="text" name="" id="" placeholder='Search Name' />
                <input type="text" name="" id="" placeholder='Search Vehicle' />
            </div>
            <TableAssign users={users} />
        </div>
    )
}
export default AssignVehicle
function TableAssign({ users }) {
    return <div className=" tbl-contaienr w-100 overfl">
        <table class="table showoverflow">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">VehicleName</th>
                    <th scope="col">Assign to</th>
                    <th scope="col">Vehicle type</th>
                    <th scope="col">Number Plate</th>
                    <th scope="col">Active/Noactive</th>
                </tr>
            </thead>
            <tbody>
                {users.map(item => (
                    <tr key={item.id}>
                        <td><img src="./image/honda.png" alt="" className='data-image me-3' /></td>
                        <td ><h3 className="m-0 d-flex"><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' />{item.name}</h3></td>
                        <td className='pd'>{item.wehical.vehicleType}</td>
                        <td className='pd'>{item.wehical.plateNumber}</td>
                        <td className='pd fw-bold'>{item.email}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>

}

