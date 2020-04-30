const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   
    day: {
        type: Data,
        default: () => new Date()
    },
    name:{
        type: string 

    }

    


})

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;