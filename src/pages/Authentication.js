import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../Authentication/Login'
import SignUp from '../Authentication/SignUp'

const Authentication = () => {
  const [login, setLogin] = useState(true)
  const history = useHistory()


  return (
    <div>
      {login ? (
        <Login login={login} setLogin={setLogin} />
      ) : (
        <SignUp login={login} setLogin={setLogin} />
      )}
    </div>
  )
}

export default Authentication
