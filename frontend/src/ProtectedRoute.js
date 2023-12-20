import React from 'react'
import { Route ,Redirect} from "react-router-dom";
import { FuelState } from './context/FeulProvider'
import { useHistory } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const {isLogin, setIsLogin} = FuelState()
  const history = useHistory()

  return <Route {...rest} render={(props)=>{
    if(isLogin) {
        return <Component/>
    }else{
      return(
        <Redirect to={{pathname: "/", state:{from: props.location}}}/>
      )
        // return <Redirect to={{pathname: "/", state: {from : props.location}}}/>
    }
  }}/>
  
}

export default ProtectedRoute
