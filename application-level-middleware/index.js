const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("I am application level middleware");
    next();
})

app.get('/', (req, res) => res.send('This is home page'))

app.get('/contact', (req, res) => res.send('This is contact page'))

app.get('/about', (req, res) => res.send(`<h1>This is about page</h1>`))

app.listen(8080, () => console.log("server is running"))