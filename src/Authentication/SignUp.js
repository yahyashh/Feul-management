// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// const SignUp = ({ login, setLogin }) => {
//   const [name, setName] = useState("")
//   const [emial, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")

//   const history = useHistory()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(emial);
//     console.log(password);
//     history.push("/admin")
//   }
//   return (
//     <div >
//       <div>

//       </div>
//       <div>

//       </div>
//       {/* <form onSubmit={handleSubmit}>
//       <h1>SignUp</h1>
//       <input type="text" onChange={(e)=> setName(e.target.value)} />
//       <input type="text" onChange={(e)=> setEmail(e.target.value)} />
//       <input type="password" onChange={(e)=> setPassword(e.target.value)} />
//       <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)} />
//       <button type='submit'>Sign up</button>
//       <button onClick={(e)=> setLogin(!login)}>Login</button>
//     </form> */}
//     </div>
//   )
// }

// export default SignUp
