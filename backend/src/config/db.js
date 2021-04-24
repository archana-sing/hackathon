const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://team_pathshala:jycJZnM8OS8udI3J@cluster0.wsah9.mongodb.net/test",{
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    })
}
module.exports = connect ;