require('dotenv').config()

const port = process.env.PORT

const express = require('express')
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workouts')

const app = express()

//MIDDLEWARE
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


//ROUTES
// app.get('/', (req, res) =>{
//     res.json({msg: "Welcome to the app"})
// })


//REPLACE THE ROUTES HERE
app.use('/api/workouts',workoutRouter)

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(port, () =>{
        console.log("Connected to DB & listening on port", port)
    })
})
.catch((err) =>{
    console.log(err)
})

//LISTEN TO PORT
// app.listen(port, () =>{
//     console.log("Listening on port", port)
// })