import React from 'react'
import './userdetial.css'
const data = [
    { id: 1, date: '23 jan 2023', feulliter: '13Liter', cost: '134546642', stations: 'Pak station' },
    { id: 2, date: '23 jan 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '23 jan 2023', feulliter: '13Liter', cost: '2000', stations: 'kotat station', },
    { id: 2, date: '23 jan 2023', feulliter: '13Liter', cost: '2000', stations: 'nation pump', },
    { id: 2, date: '23 jan 2023', feulliter: '13Liter', cost: '2000', stations: 'free station', },
    { id: 2, date: '22 feb 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '22 feb 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '23 jan 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '22 july 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '22 july 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '24 july 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '24 july 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    { id: 2, date: '24 july 2023', feulliter: '13Liter', cost: '2000', stations: 'shell', },
    // Add more data as needed
];
function UserDetial() {
    return (
        <div className='w-100 vh-100 overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center  p-3 '>

                <div className='d-flex  justify-contents-center align-items-center' >
                    <h5 style={{ "color": "#116a7b" }} className='fw-bold'><img src='./image/clogo.png ' alt="" className='me-1' style={{ "width": "2rem" }} /> Fleeto Product</h5>
                </div>

                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="usernameimage">
                <h4 className='fw-bold'><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' />Tariq Masood Fueling Record</h4>
            </div>



            <div className="row ">
                <div className="col-lg-7 cccc  ">
                    <table className="table table-hover text-start customtable w-100  overflow-scroll  " >
                        <thead>
                            <tr >
                                <th sucope="col-1 ps-5 ">On Date</th>
                                <th scope="col-1">Feul Liter</th>
                                <th scope="col-1">Cost </th>
                                <th scope="col-1">Station/Servies</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>

                                    <td className='ps-3 pd'>{item.date}</td>
                                    <td className='pd'>{item.feulliter}</td>
                                    <td className='pd'>{item.cost}</td>
                                    <td className='pd'>{item.stations}</td>
                                    <tr>
                                    </tr>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                <div className="col-5 d-flex justify-content-center align-items center  ">
                    <div className=" p-5 shadow-lg rounded" style={{ "height": "62vh" }}>
                        <div className="drivernameima ">
                            <div className='d-flex flex-column'>
                                <h5 className='fw-bold'><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' />Tariq Masood </h5>
                            </div>
                            <p className='py-2'>Driver</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='d-flex flex-column'>
                                <h5 className='fw-bold'><img src="./image/honda.png" alt="" className='data-image me-3' />Vehicle Assigned  </h5>
                            </div>
                            <p className='py-2'>Honde X</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='d-flex flex-column'>
                                <h5 className='fw-bold'><img src="./image/calender.png" alt="" className='data-image me-3  rounded-0 ' />Assigned From</h5>
                            </div>
                            <p className='py-2'>22 jul 2023 to 23 july 2022</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='d-flex flex-column'>
                                <h5 className='fw-bold'><img src="./image/time.png" alt="" className='data-image me-3 rounded-0' />Time Period </h5>
                            </div>
                            <p className='py-2'>1.5 Year</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserDetial