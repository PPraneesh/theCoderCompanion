const express = require('express')
const { hasUncaughtExceptionCaptureCallback } = require('process')
const app = express()
const mongoClient = require('mongodb').MongoClient
const dbUrl = 'mongodb://localhost:27017'
let problems = require('./problems')
const cors = require('cors')
app.use(cors())

app.get('/problems', (req, res, next)=>{
    res.send(problems)
})

app.get('/problems/:problemId', (req, res, next) => {
    const problemId = req.params.problemId;
    
    let problem = problems.find(p => p.problemId === problemId);
    if (!problem) {
        const err = new Error('Problem not found');
        err.status = 404;
        return next(err);
    }
    res.send(problem);
});

app.use((err, req,res, next)=>{
    res.send({message:err.message})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})