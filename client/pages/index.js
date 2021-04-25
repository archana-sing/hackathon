import React from 'react'
import { Board } from '../Components/Whiteboard/Board'
import HomePage from '../Components/Homepage'
import Login from '../Components/Login'
import AuthContext from '../context/authContext'
import { Whiteboard } from '../Components/Whiteboard/Whiteboard'


const index = () => {
  const [token , settoken] = React.useContext(AuthContext);
  if(token == null){
    return(
      <div>
        <Whiteboard/>
        {/* <Board/> */}
        <HomePage/>
      </div>
    )
  
  }
}

export default index