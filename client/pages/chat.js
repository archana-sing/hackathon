import React from 'react'
import SocketContext from '../context/socketContext'
import Styles from '../styles/chat.module.css'
const chat = ({userame , room}) => {
    const socket = React.useContext(SocketContext)
    const [roomUsers , setRoomUsers] = React.useState([]);
    const [message , setMessage] = React.useState("");
    const [messages, setMessages] = React.useState([]);
    
     const chatSubmitHandler = (e) => {
        e.preventDefault();
       
        //emit message to the server
        socket.emit("chatMessage", message)
        console.log(message)
        setMessage("")
    }
     const outputUsers = (users)=>{
        setRoomUsers(users)
        console.log(roomUsers)
    }
    const outputMessage = (message)=>{
        //console.log(message)
        let newMessage = messages;
        let finalMessage = newMessage.concat(message);
        setMessages(finalMessage);
    }
    React.useEffect(()=>{
        // get room and users
        socket.on("roomUsers" , ({room , users})=>{
            outputUsers(users)
        })
        //message from server
        socket.on("message",message =>{
            outputMessage(message)
        })
    })
    return (
        <>
        <div className = {Styles.container}>
        <div className={Styles.chat_container}>
           <main className={Styles.chat_main}>
                <div className= {Styles.chat_sidebar} >
                    <h2 className = {Styles.headings}>Users</h2>
                    <ul>
                    {roomUsers.map((user , i)=>(
                        <li key = {i}>{user.username}</li>
                    ))}
                    </ul>
                </div>
                <div className={Styles.chat_messages}>
                               {messages.map((message , i)=>(
                                   <div className = {Styles.message} key = {i}>
                                       <div>{message.text}</div>
                                       <div>{message.username} sent on {message.time}</div>
                                   </div>
                               ))}
                                
                </div>
            </main>
            <div className={Styles.chat_form_container}>
                <form onSubmit = {chatSubmitHandler}>
                    <input
                    value = {message}
                    onChange = {(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder="Enter Message"
                    
                />
                    <button className={Styles.btn} style = {{marginLeft : "60px"}}>Send</button>
                </form>
            </div>
        </div>
        </div>
    </>
    )
}

export default chat
