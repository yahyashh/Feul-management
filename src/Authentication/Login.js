import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({login, setLogin}) => {
const [emial, setEmail] = useState("")
const [password, setPassword] = useState("")
const history = useHistory()

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(emial);
    console.log(password);
    history.push("/user")
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" onChange={(e)=> setEmail(e.target.value)} />
      <input type="password" onChange={(e)=> setPassword(e.target.value)} />
      <button type='submit'>Login</button>
      <button onClick={(e)=> setLogin(!login)}>signUp</button>
    </form>
    </div>
  )
}

export default Login
