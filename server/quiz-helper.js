'use strict'

const data = require('./config/questions.json')

let currentQuestion = {}
let acceptingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []
let questions = []

class QuizHelper {
  static getRandomAnswerOnQuestion () {
    return new Promise ((res, rej) => {
      setTimeout (() => {
        try {
          questions = data.map((loadedQuestion) => {
            const formattedQuestion = {
              question: loadedQuestion.question
            }
            const answerChoices = [...loadedQuestion.incorrect_answers]
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1
            answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer)
            answerChoices.forEach((choice, index) => {
              formattedQuestion['choice' + (index + 1)] = choice
            })
            res(formattedQuestion)
          })
        } catch (err) {
          rej(err)
        }      
      })
    })
  }
  static getNewQuestion () {
    return new Promise ((res, rej) => {
      setTimeout (() => {
        try {
          res ('new question')
        } catch (err) {
          rej(err)
        }
      })
    })
  }
  static checkAnswer () {
    return new Promise ((res, rej) => {
      setTimeout(() => {
        try {
          res ('check answer')
        } catch (err) {
          rej(err)
        } 
      })
    })
  }
}

module.exports = QuizHelper
