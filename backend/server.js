require('dotenv').config()

const port = process.env.PORT

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

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


//WORKOUTS ROUTES
app.use('/api/workouts',workoutRoutes)

//USER ROUTES
app.use('/api/user',userRoutes)


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