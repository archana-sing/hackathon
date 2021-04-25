import React from 'react'
import Chathome from '../Components/Chathome'
import { Board } from '../Components/Whiteboard/Board'
import HomePage from '../Components/Homepage'
import Login from '../Components/Login'
import AuthContext from '../context/authContext'


const index = () => {
  const [token , settoken] = React.useContext(AuthContext);
  if(token == null){
    return(
      <div>
        {/* <Board/> */}
        <HomePage/>
      </div>
    )
  
  }
}

export default index