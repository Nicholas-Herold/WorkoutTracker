const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workouts = new Schema ({
    
    date: {
        type: Date,
        default: Date.now
    },
    
    exercises: [ {
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        default: 0  
    },
    weight: {
        type: Number,
        default: 0
    },
    reps: {
        type: Number,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    }
    }]
});

const Workouts = mongoose.model("Workouts",workouts);

module.exports = Workouts;