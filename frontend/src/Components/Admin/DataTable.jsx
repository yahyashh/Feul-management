import React, { useEffect, useState } from 'react';
import './table.css';
import axios from "axios"
import { useHistory } from 'react-router-dom'

const DataTable = () => {
  // Sample data
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const [fuelHistory, setFuelHistory] = useState([]);

  useEffect(() => {
    const fetchFuelHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/fuel-history');
        console.log(response.data);
        setFuelHistory(response.data);
      } catch (error) {
        console.error('Error fetching fuel history:', error.message);
      }
    };

    fetchFuelHistory();
  }, []);

  const deleteWehicalFromUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete-wehical-from-user/${userId}`);
      // Fetch the updated user list after deletion
      const response = await axios.get('http://localhost:5000/users-with-wehical');
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting wehical from user:', error.message);
    }
  };

  return (
    <div className="container deshboard ">
      <div className="row justify-content-center  widthtable overflow-scroll  ">
        <div className="col-md-12">
          <table className="table table-hover text-start  table-container " style={{height:"40px"}}>
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">Vehicle Name</th>
                <th scope="col">Time</th>
                <th scope="col">Usage</th>
                <th scope="col">Volume</th>
                <th scope="col">Cost</th>
              </tr>
            </thead>
            <tbody>
              {fuelHistory.map(item => (
                <tr key={item.id} onClick={() => history.push(`/UserDetial?userId=${item.user._id}`)}>
                  {item.user && (
                   <>
                   <td>{item.user.name}</td>
                   <td>{item.wehical.plateNumber}</td>
                   <td>{item.location}</td>
                   <td>{item.stationName}</td>
                   <td>{item.pricePerLiter}</td>
                   <td>{item.totalPrice}</td>                 
                   </> 
)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
