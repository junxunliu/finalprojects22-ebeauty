const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
})

// @desc post goal
// @route POST /api/goals
// @access Private
const postGoals = asyncHandler(async (req, res) => {

  let tmp = req.body;
  if (! tmp.postText){
    res.status(400);
    throw new Error('add new postText')
  }

  const goal = await Goal.create({
    postText: tmp.postText, 
    provider: req.provider.id
  })

  res.status(200).json(goal);

})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
// only owner can update their own post
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); 

  if (!goal){
    res.status(400)
    throw new Error('Goal not found');
  }

  //check if user exists
  if (!req.provider){
    res.status(401)
    throw new Error('provider not found');
  }

  // compare owner identity using id
  if(goal.provider.toString() !== req.provider.id){
    res.status(401)
    throw new Error('not authorized, (provider is now the one posted)');
  }

  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json(updateGoal);
})

// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private
// only owner can delete their own post
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id); 

  if (!goal){
    res.status(400)
    throw new Error('Goal not found');
  }

  //check if user exists
  if (!req.provider){
    res.status(401)
    throw new Error('provider not found');
  }

  // compare owner identity using id
  if(goal.provider.toString() !== req.provider.id){
    res.status(401)
    throw new Error('not authorized, (provider is now the one posted)');
  }

  await goal.remove();

  res.status(200).json({id:req.params.id});
})

module.exports = {
  getGoals, postGoals, updateGoals, deleteGoals
}