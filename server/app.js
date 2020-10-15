const express = require('express')
const app = express()
const PORT = 3000
const http = require('http').createServer(app)
// const Pusher = require('pusher')
const cors = require('cors')
const io = require('socket.io')(http)

// const pusher = new Pusher({
//     appId: '1090999',
//     key: '6269220aa43c40b5dc99',
//     secret: '798ba67cf82d514daa9c',
//     cluster: 'ap1',
//     encrypted: true
//   });
  

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

io.on('connection', socket => { 
    console.log('user connected')
});


http.listen(PORT,_=>console.log('listen PORT with HTTP'))


// app.listen(PORT,_=>console.log('Connected with port :', PORT))

