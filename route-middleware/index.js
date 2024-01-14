const express = require('express')
const app = express()



app.get('/', (req, res) => res.send('This is home page'))

app.get('/contact', (req, res) => res.send('This is contact page'))

app.use('/about',function(req,res,next){
    console.log("I am route level middleware");
    next()
})
app.get('/about', (req, res) => res.send(`<h1>This is about page</h1>`))

app.listen(8040, () => console.log("server is running"))