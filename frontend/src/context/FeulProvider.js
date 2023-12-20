import React, { useState, createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const FuelContext = createContext();

const FuelProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState([]);
  const history = useHistory()

  useEffect(()=>{
    const userInfo=JSON.parse(localStorage.getItem("userInfo"))
    console.log(isLogin);
    setUser(userInfo)
  },[history])

  return (
    <FuelContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </FuelContext.Provider>
  );
};

export const FuelState = () => {
  return useContext(FuelContext);
};

export default FuelProvider;
