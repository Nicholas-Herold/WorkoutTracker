const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workouts = new Schema ({
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
        type: Number.EPSILON,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Workout = mongoose.model("Workout",workouts);

module.exports = Workout;