import React, { useEffect, useState } from 'react';
import './table.css';
import axios from "axios"
import { useHistory } from 'react-router-dom'

const DataTable = () => {
  // Sample data
  const data = [
    { id: 1, name: 'John Doe', vehicle: 'Car', time: '10:00 AM', usage: 'Daily', volume: '5L', cost: '$10' },
    { id: 2, name: 'Jane Smith', vehicle: 'Bike', time: '02:30 PM', usage: 'Weekly', volume: '2L', cost: '$7' },
    { id: 2, name: 'Bonds', vehicle: 'Bike', time: '00:30 PM', usage: 'Weekly', volume: '4L', cost: '$17' },
    { id: 2, name: 'Smith', vehicle: 'cycle', time: '02:00 PM', usage: 'Monday', volume: '3L', cost: '$40' },
    { id: 2, name: 'Babar Azam', vehicle: 'Reshkwa', time: '06:10 PM', usage: 'Thuesday ', volume: '89L', cost: '$23' },
    { id: 2, name: 'shadab', vehicle: 'Suzuike', time: '03:55 PM', usage: 'Friday', volume: '9L', cost: '$45' },
    { id: 2, name: 'Kohli', vehicle: 'Mahran', time: '08:10 PM', usage: 'Weekly', volume: '10L', cost: '$34' },
    { id: 2, name: 'Kohli', vehicle: 'Mahran', time: '08:10 PM', usage: 'Weekly', volume: '10L', cost: '$34' },
    { id: 2, name: 'Kohli', vehicle: 'Mahran', time: '08:10 PM', usage: 'Weekly', volume: '10L', cost: '$34' },
    { id: 2, name: 'Kohli', vehicle: 'Mahran', time: '08:10 PM', usage: 'Weekly', volume: '10L', cost: '$34' },
    { id: 2, name: 'Kohli', vehicle: 'Mahran', time: '08:10 PM', usage: 'Weekly', volume: '10L', cost: '$34' },
    // Add more data as needed
  ];
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users-with-wehical');
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users with wehical data:', error.message);
      }
    };

    fetchUsers();
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
          <table className="table table-hover text-start  table-container ">
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
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.vehicle}</td>
                  <td>{item.time}</td>
                  <td>{item.usage}</td>
                  <td>{item.volume}</td>
                  <td>{item.cost}</td>
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
