import React from 'react'
import { useRouter } from 'next/router'
import SocketContext from '../context/socketContext'
const Chathome = () => {
    const router = useRouter()
    const socket = React.useContext(SocketContext)
    const [username] = React.useState("archana")
    const [room ,setroom] = React.useState("HTML")
    //console.log(router)
    const handleClick = (e) => {
        e.preventDefault()
        socket.emit("joinRoom" , {username , room})
        socket.on("message" , message => {
            console.log(message)
        })
        router.push({
            pathname : "/chat",
            state : {username , room}
        })
       
      }
<<<<<<< HEAD
    return (
        <div>
            <button onClick={handleClick}>Join Chat</button>
=======
      const quizHandler = ()=>{
        router.push({
            pathname : "/quiz",
        })
        
      }
      const learnHandler = ()=>{
        router.push({
            pathname : "/htmlstudy",
        })
        
      }
    return (
        <div>
            <button onClick={handleClick}>Join Chat</button>
            <button onClick={quizHandler}>Take Quiz</button>
            <button onClick={learnHandler}>Learn HTML</button>
>>>>>>> 50e90d4138c2455e725a7544c28995bc5b2c6c7e
        </div>
    )
}

export default Chathome
