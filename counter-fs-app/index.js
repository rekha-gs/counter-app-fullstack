const express = require('express')
const mongoose= require('mongoose')
const cors=require('cors')
const app = express()
const port = 3050
// enable json data
app.use(express.json())

app.use(cors())

// server logs 
// 3rd party middle - morgan 
app.use((req, res, next) => {
    console.log(`${req.method} -  ${req.url} - ${req.ip} ${new Date()}`)
    next()
})

// connect to db
// restart mongodb database when db server is shutdown
mongoose.connect('mongodb://localhost:27017/counter-fs-may', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to DB')
    })
    .catch((err) => {
        console.log('error', err)
    })

// Create Counter Schema 
const Schema = mongoose.Schema // const { Schema } = mongoose 
const counterSchema = new Schema({
    count: {
        type: Number, 
        default: 0
    }
})

// create Counter Model 
const Counter = mongoose.model('Counter', counterSchema)

// api for reading all counters
app.get('/api/counters', (req, res) => {
    Counter.find()
        .then((counters) => {
            res.json(counters)
        })
        .catch((err) => {
            res.json(err)
        })
})

// api for creating a counter
app.post('/api/counters', (req, res) => {
    // const body = req.body 
    const counter = new Counter()
    counter.save()
        .then((counter) => {
            res.json(counter)
        })
        .catch((err) => {
            res.json(err)
        })
})

// query parameters
app.put('/api/counters/:id', (req, res) => {
    const id = req.params.id 
    const type = req.query.type 
    let options 
    if(type === 'inc') {
        options = { $inc: { count: 1 }}
    } else if(type === 'dec') {
        options = { $inc: { count: -1 }}
    } else if(type === 'reset') {
        options = { $set: { count: 0 }}
    } 
    Counter.findByIdAndUpdate(id, options, { new: true}) 
        .then((counter) => {
            res.json(counter)
        })
        .catch((err) => {
            res.json(err)
        })
})

//  api for deleting record
    app.delete('/api/counters/:id',(req,res)=>{
        const id = req.params.id 
        Counter.findByIdAndDelete(id)
            .then((counter)=>{
                res.json(counter)
            })
            .catch((err)=>{
                res.json(err)
            })
    })

app.listen(port, () => {
    console.log('Server running on port', port)
})