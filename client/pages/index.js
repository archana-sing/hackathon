import React from 'react'
import Chathome from '../Components/Chathome'
import { Container } from '../Components/Container'
import HomePage from '../Components/Homepage'

import AuthContext from '../context/authContext'


const index = () => {
  const [token , settoken] = React.useContext(AuthContext);
  
  return (
    <div>
    <HomePage/>
    </div>
  )
}

export default index

