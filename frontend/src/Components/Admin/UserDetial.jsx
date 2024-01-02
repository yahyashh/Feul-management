import React, { useEffect, useState } from 'react'
import './userdetial.css'
import axios from "axios"
import { useHistory } from 'react-router-dom'


function UserDetial() {
    const [error, setError] = useState()
    const [user, setUser] = useState([])
    const history = useHistory()
    const userId = new URLSearchParams(window.location.search).get('userId');
useEffect(() => {
    const fetchUserData = async (e) => {
      try {
        // Check if userId is available
        console.log(userId);
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

                <button className='backbtn' onClick={()=> history.push("/admin")}><img src="./image/arrow.png" alt="" className='arrow'/>Back</button>
            </div>
            <div className="usernameimage">
                <h4 className='fw-bold m-0 '><img src={`http://localhost:5000/uploads/${user.image}`} alt="" className='data-image me-3' />{user.name}</h4>
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
                                    <td className='pd'>{item.totalLiters}</td>
                                    <td className='pd'>{item.totalPrice}</td>
                                    <td className='pd'>{item.stationName}</td>
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
                            <div className='flex items-center'>
                            <img src={`http://localhost:5000/uploads/${user.image}`} alt="" className='data-image me-2' />
                                <h5 className='fw-bold'>Driver</h5>
                            </div>
                            <p className='py-2 font-bold'>{user.name}</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='flex items-center'>
                            <img src="./image/honda.png" alt="" className='data-image me-2' />
                                <h5 className='fw-bold'>Vehicle Assigned  </h5>
                            </div>
                            <p className='py-2 font-bold'>{user.wehical.plateNumber}</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='flex items-center'>
                            <img src="./image/calender.png" alt="" className='data-image me-2  rounded-0 ' />
                                <h5 className='fw-bold'>Assigned From</h5>
                            </div>
                            <p className='py-2'>22 jul 2023 to 23 july 2022</p>
                        </div>
                        <div className="drivernameima ">
                            <div className='flex items-center'>
                            <img src="./image/time.png" alt="" className='data-image me-2 rounded-0' />
                                <h5 className='fw-bold'>Time Period </h5>
                            </div>
                            <p className='py-2 font-bold'>{user.wehical.vehicleType}</p>
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