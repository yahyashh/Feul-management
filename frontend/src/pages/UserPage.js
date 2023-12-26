import React, { useState, useEffect } from 'react'
import image from "../assets/user-landing.png"
import historyImg from "../assets/Vector.png"
import gas from "../assets/gas-pump.png"
import UserModal from '../Components/Userpages/UserModal'
import { useDisclosure } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { FuelState } from '../context/FeulProvider'

const UserPage = () => {
    const [error, setError] = useState(null);
    const {user, setUser} = FuelState()
    const history = useHistory()
    console.log(user._id, user.wehical._id);
    
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
        localStorage.setItem("userInfo",JSON.stringify(response.data))
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setError('Error fetching user data');
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, [userId]);

  return (
    <div className='font-nunito h-screen w-screen select-none'>

      <nav className='flex justify-between h-16 w-full' style={{backgroundColor: "#11687b"}}>
        <div className='pl-10 md:pl-14 flex items-center gap-1 md:gap-2'>
          <img src={gas} className='w-7 h-7'/>
          <h1 className='font-bold w-24 md:w-32 md:text-base text-sm text-center text-white'>Fleeto Product Company</h1>
        </div>

        <div className='flex items-center gap-3 pr-5'>
          <img src={historyImg} alt="/" className='w-7 h-7' onClick={()=> history.push("/Userhistory")}/>
          <UserModal>
          <img src={image} alt="" className='rounded-full w-8 h-8'/>
          </UserModal>
        </div>
      </nav>
      
      <div className='flex justify-center items-center h-4/5'>
        <div className='w-8/12 md:w-2/5'>
          <h1 className='text-black text-4xl font-bold w-64 pb-2 md:pb-5 pt-3 md:pt-0 '>Fleeto Product <div className='text-cyan-700'>Company</div></h1>
          <p className='w- text-base md:text-xl xl:text-3xl py-3 md:pb-5 xl:pb-10'>Harness feelex fuel mentoring sensors I <span className='text-cyan-700'>stoping fuel pilferage/Fuel</span> effciency by idling and save huge on fuel cost.</p>
        <button className='mt-3 py-2 px-4 text-white rounded-3xl' onClick={()=> history.push(`/Uploadimage?userId=${user._id}&wehicalId=${user.wehical._id}`)} style={{backgroundColor: "#11687b"}}>Add record</button>
        </div>
        <div className='w-2/5 hidden md:flex'>
          <img src={image} alt="/" className='img-fluid'/>
        </div>

      </div>

    </div>
  )
}

export default UserPage
