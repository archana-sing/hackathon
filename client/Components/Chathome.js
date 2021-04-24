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
    return (
        <div>
            <button onClick={handleClick}>Join Chat</button>
            
        </div>
    )
}

export default Chathome
