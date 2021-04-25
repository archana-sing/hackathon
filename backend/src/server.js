const express = require("express");
const http = require("http");
const app = express();
const socketio = require("socket.io")
const formatMessage = require("./utils/message")
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require("./utils/users")
const io = socketio(server);
const botname = "My Pathshala"

app.use('/login', (req, res) => {
    res.send({
      token: '2365767654623432425'
    });
  });
  const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://192.168.1.7:3000",
		methods: [ "GET", "POST" ]
	}
})
io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

//const cors = require("cors")


//run when client connects
io.on("connection" , socket => {
    console.log("new client has been connected")
    socket.on("joinRoom" , ({username , room})=>{
        const user = userJoin(socket.id , username , room);
        socket.join(user.room);

        //welcome new user
        socket.emit("message" ,formatMessage(botname , `${user.username} welcome to the ${user.room} group`) )

server.listen(5000, () => console.log("server is running on port 5000"))
        //broadcast when a user connects
        socket.broadcast.to(user.room).emit("message" , formatMessage(botname , `${user.username} has joined the discussion`))

        //send users and room info
        io.to(user.room).emit("roomUsers" , {
            room : user.room,
            users : getRoomUsers(user.room)
        })

        //listen for chat messages
        socket.on("chatMessage" , msg => {
            console.log(msg)
            const user = getCurrentUser(socket.id)
            io.to(user.room).emit("message" , formatMessage(user.username , msg))
        })


        //when client diconnect
        socket.on("disconnect" , ()=>{
            const user = userLeave(socket.id)
            if(user){
                io.to(user.room).emit("message" , formatMessage(botname , `${user.username} has left the chat`))
            }
            //after user left again send the users and room details
            io.to(user.room).emit("roomUsers" , {
                room : user.room,
                users : getRoomUsers(user.room)
            })
        })

    })

    //listen for draw data
    socket.on("mouse", (data) => {
        socket.broadcast.emit("mouse", data)
    })
})


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));