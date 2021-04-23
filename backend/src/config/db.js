const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://archana:h8bhkjaBVeS3wUu@cluster0.kbvlo.mongodb.net/disney_hotstar?retryWrites=true&w=majority",{
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    })
}
module.exports = connect ;