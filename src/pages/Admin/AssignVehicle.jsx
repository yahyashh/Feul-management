import React, { useState } from 'react'
import SiderBar from "./SiderBar"
import "./assign.css"
import Assigncar from './Assigncar';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const data = [
    { id: 1, name: 'John Doe', email: 'admin3452@gmail.com', phonenumber: '134546642', country: 'Pakistan' },
    { id: 2, name: 'Bonds', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    { id: 2, name: 'Smith', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Monday', },
    { id: 2, name: 'Babar Azam', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Thuesday ', },
    { id: 2, name: 'shadab', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Friday', },
    { id: 2, name: 'Kohli', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    { id: 2, name: 'Kohli', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    { id: 2, name: 'Rabila', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    { id: 2, name: 'Rabila', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    { id: 2, name: 'Rabila', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    { id: 2, name: 'Rabila', email: 'admin3452@gmail.com', phonenumber: '744456754', country: 'Weekly', },
    // Add more data as needed
];

function AssignVehicle() {
    const [assigns, setAssigns] = useState(true)

    return assigns ? (<div className='w-100 d-flex overflow-hidden'><SiderBar />
        <AssignVehicleTable assigns={assigns} setAssigns={setAssigns} />

    </div>) : <Assigncar />;

}
function AssignVehicleTable({ assigns, setAssigns }) {
    return (
        <div className="d-flex flex-column w-100  gap-4 p-4 responsivemargin vh-100">
            <div className="d-flex  justify-content-between align-items-center me-5 m-lg-0 m-md-0  ">
                <h5 className=''>feuling Record</h5>
                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="d-flex justify-content-end align-items-center w-100 seainp">
                <input type="text" name="" id="" placeholder='Search here' />
            </div>
            <TableAssign assigns={assigns} setAssigns={setAssigns} />
        </div>
    )
}
export default AssignVehicle
function TableAssign({ assigns, setAssigns, }) {
    return <div className=" w-100 overflow-scroll ">
        <div className="row justify-content-center overfl ">
            <div className="col-md-12 ">
                <table className="table table-hover text-start  table-container ">
                    <thead>
                        <tr>
                            <th sucope="col">Driver Name</th>
                            <th scope="col">Emial</th>
                            <th scope="col">Phone Number </th>
                            <th scope="col">Country</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td><Link to={"/UserDetial"}><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' /></Link>{item.name}</td>
                                <td className='pd'>{item.email}</td>
                                <td className='pd'>{item.phonenumber}</td>
                                <td className='pd'>{item.country}</td>
                                <td className='pd updeladd' ><img src="./image/upd.png" alt="" /><img src="./image/delete.png" alt="" /> <img src="./image/add.png
                                " alt="" onClick={() => setAssigns(!assigns)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}


