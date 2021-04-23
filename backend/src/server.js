const express = require("express")
const app = express();


const connect = require("./config/db")

app.use(express.json());



const start = async() => {
    await connect();
    app.listen(7000 , () => {
        console.log("Listening on port 7000")
    })
}

 module.exports = start;