const express = require('express')
const router = express.Router()

const Task = require('../models')

router.get('/', async (req, res)=>{
    const response = await Task.find()
    console.log(response)
        res.json('received')
})

router.post('/', async (req, res)=>{
    const { title, description } = req.body
    const task = new Task({ title, description })
    await task.save()
    res.json('saved')
})

router.get('/:id', async (req, res)=>{
    const OneTask = Task.findById(req.params.id)
    res.json(OneTask)
})

router.put('/:id', async (req, res)=>{
    const { title, description } = req.body
    const newTask = { title, description}
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json('received')
})
 
router.delete('/:id', async (req, res)=>{
    await Task.findByIdAndRemove(req.params.id)
    res.json('deleted')
})
module.exports = router