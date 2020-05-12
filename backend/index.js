// Initalize express
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
// const { db, auth } = require('./firebase/firebase')

// Middleware, run on all requests
app.use(express.json())
app.use(express.static('public'))


// Authorization middleware

// app.use((req, res, next ) => {

//     console.log(req.headers['authorization'])
//     auth.verifyIdToken(token).then(user => {
//         next();
//     }).catch( err => {
//         res.status(403).send({ msg: 'No API for you!'})
//     })
//     next();
// })


app.use((req, res, next) => {
    const secret = req.headers["secret"]
    if(secret === process.env.SECRET) {
        next()
    } else {
        res.status(403).send( { msg: "This request is denied due to unauthorized access" } ) 
    }
})

// Port listen
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))

// Import routes
const usersDataRoutes = require('./routes/_UserData')

// Routes 
app.use('/users', usersDataRoutes)







