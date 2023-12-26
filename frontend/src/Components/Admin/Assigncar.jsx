import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import './assigncar.css'
import { useHistory } from 'react-router-dom'

function Assigncar() {
  const history = useHistory();
  const userId = new URLSearchParams(window.location.search).get('userId');

  const [wehicalData, setWehicalData] = useState({
    // Define fields for the wehical form
    vehicleType: '',
    plateNumber: '',
    // ... other fields
  });

  const handleAssignWehical = async (e) => {
    e.preventDefault();
    try {
      // Send a request to your backend API to assign the wehical
      await fetch(`http://localhost:5000/api/assignwehical/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wehicalData),
      });
      // alert("assign successfull");
      // // Navigate back to the user list or any other route
      // history.push('/admin');
    } catch (error) {
      console.error('Error assigning wehical:', error.message);
    }
  };
    return (
        <div className='w-100 vh-100 row px-3 overflow-hidden'>
            <div className="col-12 d-flex justify-content-between align-items-center" style={{ "height": "10vh" }} >
                <div className="d-flex gap-2 align-items-center logoforheightwidth ">
                    <img src="./image/clogo.png" alt="" style={{ "width": "30px" }} />
                    <h5 className='fw-bold m-0' style={{ "color": "#116a7b" }}>feeto Products </h5>
                </div>
                <button className='backbtn'><img src="./image/arrow.png" alt="" className='arrow' />Back</button>
            </div>
            <div className="row main-container d-flex  " style={{ "height": "100vh" }} >
                <div className=" col-lg-6 col-md-6 heightforcolum d-flex justify-content-center align-items-center ">
                    <img src="./image/car.png" alt="" className='img-fluid' />
                </div>
                <form className="  col-lg-6 col-md-6 col-12 heightforcolum d-flex justify-content-center align-items-center flex-column gap-5">
                    <h3 className='m-0' style={{ "color": "#116a7b" }}>Assign Vehicle to New User </h3>
                    <div className="d-flex gap-lg-5  align-items-center flex-wrap boxvehicleassign">
                        <div className="d-flex flex-column  gap-1 ">
                            <label>Vehicle Number :  </label>
                            <input type="text" name="" id="" className='p-2 inp' placeholder='Vehicle Number ' 
                            value={wehicalData.plateNumber}
                            onChange={(e) => setWehicalData({ ...wehicalData, plateNumber: e.target.value })}
                            />
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <label>Vehicle Type </label>
                            <input type="text" name="" id="" className='p-2 inp ' placeholder='Assigned Name '
                            value={wehicalData.vehicleType}
                            onChange={(e) => setWehicalData({ ...wehicalData, vehicleType: e.target.value })}
                            />
                        </div>
                    </div>

                    <button onClick={handleAssignWehical} className='backbtn comfirmbtn'>comfirm</button>
                </form>
            </div>

        </div>
    )
}

export default Assigncar
