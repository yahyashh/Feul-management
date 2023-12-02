import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Image from "../assets/undraw_navigator_a479 3.png"

const SignUp = ({login, setLogin}) => {
const [name, setName] = useState("")
const [emial, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const history = useHistory()

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(emial);
    console.log(password);
    history.push("/admin")
}
  return (
    <div className='h-screen flex flex-col sm:flex-row font-nunito'>

      <div className='w-full hidden sm:flex justify-center items-center flex-col gap-y-24' style={{backgroundColor:"#11687b"}}>
      <h1 class="text-3xl text-white font-nunito">
        Fuel Management
      </h1>
      <img src={Image} className='img-fluid w-3/4' />
      </div>

      <div className='bg-white w-full flex justify-center items-center'>
        <div className='mx-12'>
         
         <div className="text-center">
         <h1 className='text-lg font-bold mb-2'>Ceate a New Account</h1>
         <p className='text-sm mb-3'>Already have an account?<a href='/' style={{color: "#11687b"}}>Log in</a></p>
         </div>

         <form className='row gap-y-1' onSubmit={handleSubmit}>
          <div className='col-12 col-sm-6'>
         <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Full name</label>
         <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
          </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Company Name</label>
        <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
        </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>City</label>
        <input type="email" className= "form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
        </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Address</label>
        <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
        </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Country</label>
        <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
        </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Phone Number</label>
        <div class="input-group mb-2 mr-sm-2 border-2 rounded-md" style={{borderColor: "#11687b",}}>
         <div class="input-group-prepend">
          <select class="input-group-text px-0">
            <option className='w-12 px-0'>+92</option>
            <option>+93</option>
            <option>+100</option>
          </select>
         </div>
         <input type="text" class="form-control " id="inlineFormInputGroupUsername2"/>
        </div>
        {/* <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/> */}
        </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Email</label>
        <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
        </div>

        <div className='col-12 col-sm-6'>
        <label for="exampleInputEmail1" className='text-lg sm:text-sm md:text-base'>Password</label>
        <input type="email" className="form-control rounded-md border-2" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderColor: "#11687b"}}/>
        </div>
        <div className='flex justify-center items-center mt-2'>
         <button className=' text-white text-base px-3 py-1 rounded-2xl w-20'type='submit' style={{backgroundColor:"#11687b"}}>Submit</button>
        </div>
         </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
