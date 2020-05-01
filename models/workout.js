const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises:[
        {
            name:{
                type: String,
                trim: true,
                required:"Enter exercise name"
            },

            type:{
                type: String,
                trim: true,
                required:"Enter exercise type"

            },

            weight:{
                type: Number,
                required: "Enter amount of weight in lbs"
            },

            sets:{
                type: Number,
                required: "Enter amount of sets"
            },
            
            reps:{
                type: Number,
                required: "Enter number of reps"
            },
            
            duration:{
                type: Number,
                required: "Enter duration in minutes"
            }
        }    
    ]
    },
     {
        toJson:{
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;