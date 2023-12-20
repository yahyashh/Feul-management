import React, { useState, createContext, useContext } from 'react';

const FuelContext = createContext();

const FuelProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <FuelContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </FuelContext.Provider>
  );
};

export const FuelState = () => {
  return useContext(FuelContext);
};

export default FuelProvider;
