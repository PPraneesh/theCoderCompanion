const express = require('express')
const app = express()

app.use(express.json())

app.get('/problems', (req, res, next)=>{
    res.send('Hello World')
})

app.get('/problems/:problemId', (req, res, next)=>{
    res.send(`Problem ${req.params.problemId}`)
})

app.use((err, req,res, next)=>{
    res.send({message:err.message})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})