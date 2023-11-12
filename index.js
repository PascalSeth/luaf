require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
const connection=require('./db')
app.use(express.json())
app.use(cors())
const User=require('./user')

connection();

app.post('/userdatas', (req,res) => {
    User.create(req.body)
    .then(userdata => res.json(userdata))
    .catch(err => res.json(err))})

const port = process.env.PORT||8080;
app.listen(port, () => console.log(`Listening to  ${port}...`))



