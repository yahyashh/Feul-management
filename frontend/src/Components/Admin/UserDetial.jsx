import React, { useEffect, useState } from 'react'
import './userdetial.css'
import axios from "axios"

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
    const [error, setError] = useState()
    const [user, setUser] = useState([])
    const userId = new URLSearchParams(window.location.search).get('userId');
useEffect(() => {
    const fetchUserData = async (e) => {
      try {
        // Check if userId is available
        if (!userId) { 
          setError('User ID not provided');
          return;
        }

        // Make a GET request to fetch user data based on the user ID
        const response = await axios.get(`http://localhost:5000/api/userweh/${userId}`);
        console.log(response.data);
        setUser(response.data)
        
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setError('Error fetching user data');
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, [userId]);

    return (
        <div className='w-100 vh-100 '>
            <div className='d-flex justify-content-between align-items-center  p-3 '>

                <div className='d-flex  justify-contents-center align-items-center' >
                    <h5 style={{ "color": "#116a7b" }} className='fw-bold'><img src='./image/clogo.png ' alt="" className='me-1' style={{ "width": "2rem" }} /> Fleeto Product</h5>
                </div>

                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="usernameimage">
                <h4 className='fw-bold m-0 '><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' />Tariq Masood Fueling Record</h4>
            </div>



            <div className="row  mywrapsmallscreen w-100">
                <div className="col-lg-7 col-md-7 col-5 cccc   overflow-scroll ">
                    <table className="table table-hover text-start customtable exterwidth" >
                        <thead>
                            <tr >
                                <th sucope="col-1 ps-5 ">On Date</th>
                                <th scope="col-1">Feul Liter</th>
                                <th scope="col-1">Cost </th>
                                <th scope="col-1">Station/Servies</th>

                            </tr>
                        </thead>
                        <tbody>
                            {user.fuelHistory?.map(item => (
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
                    
                <div className="col-lg-5 col-md-5   d-flex justify-content-center align-items center  ">
                    <div className=" p-5 shadow-lg rounded usertimedetial" style={{ "height": "62vh" }}>
                {user.wehical ? (
                    <>
                    
                        <div className="drivernameima ">
                            <div className='d-flex flex-column'>
                                <h5 className='fw-bold'><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" className='data-image me-3' />Driver</h5>
                            </div>
                            <p className='py-2'>{user.name}</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='d-flex flex-column'>
                                <h5 className='fw-bold'><img src="./image/honda.png" alt="" className='data-image me-3' />Vehicle Assigned  </h5>
                            </div>
                            <p className='py-2'>{user.wehical.plateNumber}</p>
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
                            <p className='py-2'>u{user.wehical.vehicleType}</p>
                        </div>
                    </>
                    ) : (
                        <div>
                            No Vehicle Assigned
                        </div>
                    )}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UserDetial