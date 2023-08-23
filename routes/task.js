// routes/task.js

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/task/:id',async (req, res) => {
    console.l
    try {
        const task = await Task.find({_id:req.params.id})
        res.json(task)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})
// Update a task by ID
router.patch('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,    
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
