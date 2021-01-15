
const router = require("express").Router();
//mark modelsandschemas with capitol letters
const Workout = require("../models/workout");
//api-routes below

//get route for /api/workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    }) 
    .catch(err => {
        res.json(err);
    });
});


//post before put***
//post route for /api/workouts
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.json(err);
    });
});

//put for /api/workouts/:id

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id, 
        {
            $push: { exercises: body}
        }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(()=> {
        res.json("true")
    })
    .catch(err => {
        res.json(err);
    });
});



//get for /api/workouts/range
//router.get("/api/wprkouts/range", )

router.get("/api/workouts/range", (req, res) => {
    Workout.find().sort({_id:-1}).limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    }) 
    .catch(err => {
        res.json(err);
    });
});
// * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

// * View the total duration of each workout from the past seven workouts on the `stats` page.

//aggregate function needs to be included here




//end of file
module.exports = router;