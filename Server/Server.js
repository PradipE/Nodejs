//here we import the http server
const http = require('http')
//here we import the file system server
const fs = require('fs')
//here we import the url 
const url = require('url')
//here we created the handerler that serves all the server request and responce 
function handelServer(req, res) {
  //here we have data set that is saved when any user use
  const logData = `${Date.now()}:${req.method} :${req.url} : New client enter into server \n`
  //that is my url 
  const myUrlData = url.parse(req.url, true)
  console.log(myUrlData)
  if (req.url === '/favicon.ico') {
    return res.end()
  }
  //here we appen the file that we are created that is async
  fs.appendFile('Data.txt', logData, (error, Data) => {
    //here user name
    const userName = myUrlData.query.name
    //here data 
    const userId = myUrlData.query.id
    //search query
    const search = myUrlData.query.search_query
    //here all cases when  we go anathor page
    switch (myUrlData.pathname) {
      case '/':
        res.end('Home page')
        break
      case '/server':
        res.end('Server page')
        break
      case '/about':
        res.end(`Hi ${userName} your id ${userId}`)
        break
      case '/search':
        res.end('Here is your search result ' + search)
        break
      case '/signup':
        if (req.method === 'GET') {
          res.end("this is signup form")
        }
        else if (req.method === 'POST') {
          res.end('Sign up sucess')
        }
        break

      default:
        res.end('404 Server not found')

    }
  })


}


//here we created out server port name but that is in local storage

myFirstServer.listen(3001, () => {
  console.log("Local server is started")
})