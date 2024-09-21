//here wee import the http
const http = require("http")
//here we import express
const expressjs = require("express")
//here we created a app that is contain express js 
const app = expressjs();
//here we use request and responce 
app.get('/', (req, res) => {
  return res.send(`Hello`)
})
app.get('/about' ,(req,res) => {
    return res.send(`Hello From ${req.query.name}`)
})
//here we created the http server that display all my data into http server
const myFirstServer = http.createServer(app)
//here we created out server port name but that is in local storage

myFirstServer.listen(3000, () => {
    console.log("Local server is started")
  })