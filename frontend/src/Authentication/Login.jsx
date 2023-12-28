import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './login.css';
import { ForgetPassword } from './ForgetPassword';
import axios from "axios"
import { FuelState } from '../context/FeulProvider';

const Login = ({ login, setLogin }) => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [restPassword, setRestPassword] = useState(true)
  const { isLogin, setIsLogin } = FuelState()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  // const [restPassword, setRestPassword] = useState(false)
  const history = useHistory()
  const [user, setUser] = useState('user');


  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData);
      console.log("before login true", isLogin);
      setIsLogin(true)
      console.log("After login true", isLogin);
      console.log(response.data.user);
      console.log(response.data.user.isAdmin);

      const { token, user } = response.data;

      const userId = response.data.user._id;
      console.log(userId);
      const wehicalId = user.wehical ? user.wehical._id : null;
      console.log("sfsdgsgweh" + wehicalId);
      // Store the token and user data in localStorage or wherever needed
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Log the token and user data to the console
      console.log('Token:', token);
      console.log('User Data:', user);
      if (user.isAdmin === 'client') {
        history.push(`/user?userId=${userId}&wehicalId=${wehicalId}`)
        alert("client login")
      } else {
        history.push("/admin")
        alert("admain login")
      }
    } catch (error) {
      alert(error.response.data.error)
      console.error('Error during login:', error.response.data.error);
      // Handle other errors, display a message, or redirect as needed
    }
    console.log("Outside trycatch", isLogin);
  };
  useEffect(() => {
    console.log('isLogin changed:', isLogin);
  }, [isLogin]);

  const handleRadioChange = (event) => {
    setUser(event.target.value);
  };
  return (
    restPassword ? <LoginPage handleInputChange={handleInputChange} setRestPassword={setRestPassword} login={login} setLogin={setLogin} handleSubmit={handleSubmit} restPassword={restPassword} user={user} handleRadioChange={handleRadioChange} /> :
      <ForgetPassword />
  )
}
export default Login



function LoginPage({ restPassword, handleSubmit, setRestPassword, handleInputChange, setPassword, login, setLogin, user, handleRadioChange }) {
  return (<div className="container-fluid row  w-100 vh-100 ">
    <div className='col-12 col-sm-12 col-md-6 col-lg-6 bg-custom '>
      <div className="text-center text-white pt-5">
        <p>Welcome To Our Website !</p>
        <h1>Feul Mangment System</h1>
      </div>
      <div>
        <img src='./image/login.png ' className='img-fluid' alt="" />
      </div>
    </div>
    <div className='pt-2 col-12  col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center  flex-column loginPadding '>

      <form onSubmit={handleSubmit} className='d-flex gap-2 flex-column '>
        <div className="text-div text-center pb-2 mt-2 ">
          <h2 style={{ fontSize: 'calc(1rem + 0.9vw)' }} >Hello! Welcome back !</h2>
          <p className='text-secondary pt-2 ' >Log in with your data that you entered during in your registration.</p>
        </div>
        <div className="d-flex flex-column gap-2 ">
          <label htmlFor="">Email</label>
          <input className='p-2 inplogcol' type="email" name="email" onChange={handleInputChange} />
        </div>
        <div className="d-flex flex-column gap-2 ">
          <label htmlFor="">Password</label>
          <input className='p-2 inplogcol' type="password" name="password" onChange={handleInputChange} />
        </div>
        <div className="d-flex justify-content-end align-items-center pt-2 pb-2">
          <button className='m-0 text-decoration-underline custom-underline-offset forgetbtn cursor-pointer' onClick={() => setRestPassword(!restPassword)}>Forget Password</button>
        </div>
        <div className='d-flex justify-content-center align-items-center'><button type='submit' className='submitbtn '>Login</button></div>
        <div className='d-flex justify-content-between align-items-center pt-3'>
          <div><input
            type="radio"
            id="user"
            value="user"
            checked={user === 'user'}
            onChange={handleRadioChange}
          />
            <label htmlFor="user">User</label></div>

          <div><input
            type="radio"
            id="admin"
            value="admin"
            checked={user === 'admin'}
            onChange={handleRadioChange}
          />
            <label htmlFor="admin">Admin</label></div>

        </div>
        <div className='d-flex align-items-center'>
          <hr className='flex-grow-1 ' />
          <p className='text-center m-0 px-2'>or</p>
          <hr className='flex-grow-1 ' />
        </div>
        <div className="text-center ">
          <button className='pointer-events-none m-0  py-2 user-select-none  createbtn ' onClick={(e) => setLogin(!login)} > Create Account</button>
        </div>
        <div className="text-center policy ">
          <p className='m-0 text-secondary '> Pravicy  Policy & Terms and condition  </p>
        </div>
      </form>
    </div>
  </div>)
}
