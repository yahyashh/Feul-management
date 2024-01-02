import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormLabel,
  FormControl,
  Button,
} from '@chakra-ui/react'
import image from "../../assets/user/DSC00508.jpg"
import nameImg from "../../assets/user/Group.png"
import addressImg from "../../assets/user/address.png"
import cnicImg from "../../assets/user/cnic.png"
import contactImg from "../../assets/user/contact.png"
import emailImg from "../../assets/user/email.png"
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { FuelState } from '../../context/FeulProvider'


const UserModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isLogin, setIsLogin } = FuelState()
  const history = useHistory()
  const { user, setUser } = FuelState()
  console.log(user);

  const logoutHandler = () => {
   history.push("/")
  }

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader paddingLeft={0} paddingRight={0}>
            <div className='flex items-center gap-2 pl-6 pb-2'>
              <img src={`http://localhost:5000/uploads/${user.image}`} alt="" className='rounded-full w-12 h-12' />
              <h1 className=''>User name</h1>
            </div>
            <hr />
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl mt={0} display={'flex'} justifyContent={'space-between'}>
              <div className='flex gap-2 items-center'>
                <img src={nameImg} alt="/" className=' h-6' />
                <label className='text-lg'>{user.name}</label>
              </div>
              <p className='text-lg'>{user.name}</p>
            </FormControl>
            <hr />

            <FormControl mt={4} display={'flex'} justifyContent={'space-between'}>
              <div className='flex gap-2 items-center'>
                <img src={addressImg} alt="/" className=' h-6' />
                <label className='text-lg'>Address</label>
              </div>
              <p className='text-lg'>{user.address}</p>
            </FormControl>
            <hr />

            <FormControl mt={4} display={'flex'} justifyContent={'space-between'}>
              <div className='flex gap-2 items-center'>
                <img src={cnicImg} alt="/" className=' h-6' />
                <label className='text-lg'>CNIC</label>
              </div>
              <p className='text-lg'>{user.CNIC}</p>
            </FormControl>
            <hr />

            <FormControl mt={4} display={'flex'} justifyContent={'space-between'}>
              <div className='flex gap-2 items-center'>
                <img src={contactImg} alt="/" className=' h-6' />
                <label className='text-lg'>Contact</label>
              </div>
              <p className='text-lg'>{user.phoneNumber}</p>
            </FormControl>
            <hr />

            <FormControl mt={4} display={'flex'} justifyContent={'space-between'}>
              <div className='flex gap-2 items-center'>
                <img src={emailImg} alt="/" className=' h-6' />
                <label className='text-lg'>Email</label>
              </div>
              <p className='text-lg'>{user.email}</p>
            </FormControl>
            <hr />

          </ModalBody>

          <ModalFooter display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <button className='py-2 px-8 text-white rounded-3xl font-bold' onClick={logoutHandler} style={{ backgroundColor: "#11687b" }}>
              Logout
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserModal
