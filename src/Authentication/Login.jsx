import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './login.css';
import { ForgetPassword } from './ForgetPassword';

const Login = ({ login, setLogin }) => {
  const [emial, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [restPassword, setRestPassword] = useState(true)
  // const [restPassword, setRestPassword] = useState(false)
  const history = useHistory()
  const [user, setUser] = useState('user');


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!emial.trim() || !password.trim()) {

      alert('Please fill in both email and password fields.');
      return " "
    }

    setEmail('');
    setPassword('');

    if (user === "user") {
      history.push("/user")
    }
    else if (user === "admin") {
      history.push("/admin")
    }
    else {
      alert("is not working")
    }
  }
  const handleRadioChange = (event) => {
    setUser(event.target.value);
  };
  return (
    restPassword ? <LoginPage setEmail={setEmail} setPassword={setPassword} setRestPassword={setRestPassword} login={login} setLogin={setLogin} handleSubmit={handleSubmit} restPassword={restPassword} user={user} handleRadioChange={handleRadioChange} /> :
      <ForgetPassword />
  )
}
export default Login



function LoginPage({ restPassword, handleSubmit, setRestPassword, setEmail, setPassword, login, setLogin, user, handleRadioChange }) {
  return (<div className="container-fluid row  w-100 vh-100 ">
    <div className='col-12 col-sm-12 col-md-6 col-lg-6 bg-custom '>
      <div className="text-center text-white pt-5">
        <p>Welcome To Our Website !</p>
        <h3>Feul Mangment System</h3>
      </div>
      <div>
        <img src='./image/login.png ' className='img-fluid' alt="" />
      </div>
    </div>
    <div className='pt-2 col-12  col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center  flex-column loginPadding '>

      <form onSubmit={handleSubmit} className='d-flex gap-2 flex-column '>
        <div className="text-div text-center pb-2 ">
          <h2 style={{ fontSize: 'calc(1rem + 0.9vw)' }} >Hello! Welcome back !</h2>
          <p className='text-secondary pt-2 ' >Log in with your data that you entered during in your registration.</p>
        </div>
        <div className="d-flex flex-column gap-2 inp">
          <label htmlFor="">UserName</label>
          <input className='p-2 inplogcol ' type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="d-flex flex-column gap-2 inp">
          <label htmlFor="">Password</label>
          <input className='p-2 inplogcol  ' type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-flex justify-content-end align-items-center pt-2 pb-2">
          <button className='m-0 text-decoration-underline custom-underline-offset forgetbtn cursor-pointer' onClick={() => setRestPassword(!restPassword)}>Forget Password</button>
        </div>
        <button type='submit' className='submitbtn'>Login</button>
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
