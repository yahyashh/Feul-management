import React, { useState } from 'react'
import Login from '../Authentication/Login'
import SignUp from '../Authentication/SignUp'
import { FuelState } from '../context/FeulProvider'

const Authentication = () => {
  const [login, setLogin] = useState(true)
  // const { login,setLogin } = FuelState()

  return (
    <div>
      {login ? (
        <Login login={login} setLogin={setLogin}/>
      ) : (
        <SignUp/>
      )}
    </div>
  )
}

export default Authentication
