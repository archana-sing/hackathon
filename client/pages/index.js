import React from 'react'
import Chathome from '../Components/Chathome'
import { Container } from '../Components/Container'
import HomePage from '../Components/Homepage'
import Login from '../Components/Login'
import AuthContext from '../context/authContext'


const index = () => {
  const [token , settoken] = React.useContext(AuthContext);
  if(token == null){
    return(
      <Login/>
      )
  }
  return (
    <div>
    <HomePage/>
    </div>
  )
}

export default index

