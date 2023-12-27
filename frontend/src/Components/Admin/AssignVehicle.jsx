import React, { useEffect, useState } from 'react'
import SiderBar from "./SiderBar"
import "./assign.css"
import Assigncar from './Assigncar';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom'
import axios from 'axios';


function AssignVehicle() {
    const [user, setUser] = useState([])
    const history = useHistory()
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                console.log(response.data);
                setUser(response.data)
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        };

        fetchUsers();
    }, []);


    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:5000/api/use/${userId}`);
            const updatedUsers = user.filter(user => user._id !== userId);
            setUser(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    const AssignVeh = (userId) => {
        history.push(`/assignweh?userId=${userId}`)
    }

    return (<div className='w-100 d-flex overflow-hidden'><SiderBar />
        <AssignVehicleTable AssignVeh={AssignVeh} user={user} setUser={setUser} deleteUser={deleteUser} />

    </div>)
}
function AssignVehicleTable({ user, setUser, deleteUser, AssignVeh }) {
    return (
        <div className="d-flex flex-column w-100  gap-4 p-4 responsivemargin vh-100">
            <div className="d-flex  justify-content-between align-items-center me-5 m-lg-0 m-md-0  ">
                <h5 className=''>feuling Record</h5>
                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="d-flex justify-content-end align-items-center w-100 seainp">
                <input type="text" name="" id="" placeholder='Search here' />
            </div>
            <TableAssign AssignVeh={AssignVeh} user={user} setUser={setUser} deleteUser={deleteUser} />
        </div>
    )
}
export default AssignVehicle
function TableAssign({ user, setUser, deleteUser, AssignVeh }) {
    return <div className=" w-100 overflow-y-scroll ">
        <div className="row justify-content-center overflo myoverflow ">
            <div className="col-md-12 ">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">phoneNumber</th>
                            <th scope="col">Address</th>
                            <th scope="col">Assign</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => (
                            <tr key={index}>
                                <td className='d-flex'><Link to={"/UserDetial"}><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' /></Link>{item.name}</td>
                                <td className='pd'>{item.email}</td>
                                <td className='pd'>{item.phoneNumber}</td>
                                <td className='pd'>{item.address}</td>
                                <td className='pd updeladd d-flex' ><img src="./image/upd.png" alt="" /><img src="./image/delete.png" alt="" onClick={() => deleteUser(item._id)} />
                                    {item.wehicle ? (
                                        <img src="./" alt="" />
                                    ) : (
                                        <img src="./image/add.png" alt="" onClick={() => AssignVeh(item._id)} />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}


