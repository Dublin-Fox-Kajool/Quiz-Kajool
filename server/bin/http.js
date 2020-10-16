const app = require('../app')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const quizHelper = require('../quiz-helper')
const Questions = async () => await quizHelper.getRandomAnswerOnQuestions().catch(err => {
    console.log(err)
})

const users = []
let index = 0

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('user-connect', (user) => {
      users.push(user.name)
      console.log(users)

      io.emit('USER_CONNECTED', users)
    })
    
    socket.on('question-request', async (counter) => {
      index += counter
      const questions = await Questions()
      const question = questions[counter]
      io.emit('question-send', question)
    })
})

const PORT = process.env.PORT || 3000

http.listen(PORT,_=>console.log('listen PORT with HTTP'))