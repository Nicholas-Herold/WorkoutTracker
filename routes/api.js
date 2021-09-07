const router = require('express').Router();
const workouts = require('../models/workout');

router.get('/api/workouts', async (req,res)=>{
  try {
    const exercises = await workouts.find({});
    
    res.json(exercises)
    
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/api/workouts/range',async (req,res) =>{
  try {
    const range = await workouts.find({});
    res.json(range);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/workouts",async({body},res)=>{
  try {
    const work = await workouts.create(body)
    res.json(work)
  } catch (err) {
    res.status(400).json(err)
  }
  
});

router.put("/api/workouts/:id",async (req,res)=>{
  console.log(req.body);
  try {
    const id = req.params.id;
    const update = req.body;
    const updateWorkout = await workouts.findByIdAndUpdate(id,
      {
        $push: {exercises: update}
      }
      );
    console.log(updateWorkout);
    res.json(updateWorkout);
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;