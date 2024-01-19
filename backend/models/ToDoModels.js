const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    toDo:{
        typr: String,  
        required: true
    }
});
module.exports = mongoose.model("ToDo",toDoSchema);