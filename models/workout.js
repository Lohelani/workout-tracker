
//tutor helpedwith this
const opts = { toJSON: { virtuals: true } };

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            type:
            {
                type: String,
                trim: true,
                require: "Enter exercise type"
            },
            name:
            {
                type: String,
                trim: true,
                require: "Enter exercise name"
            },
            duration:
            {
                type: Number,
                require: "Enter duration"
            },
            distance:
            {
                type: Number,
                require: "Enter distance"
            },
            weight:
            {
                type: Number
            },
            reps:
            {
                type: Number
            },
            sets:
            {
                type: Number
            }
        }
    ]

},

opts, {
    virtuals: true
}
)
//this merges duration and distance instead of using aggregation
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((ttl, ex) => {
        return ttl + ex.duration;
      }, 0)
      
      })


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
