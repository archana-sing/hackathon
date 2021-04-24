const express = require("express")
const app = express();
const http = require("http")
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

const connect = require("./config/db")

app.use(express.json());

server.listen(5000, () => console.log("server is running on port 5000"))

const start = async() => {
    await connect();
    app.listen(7000 , () => {
        console.log("Listening on port 7000")
    })
}

 module.exports = start;