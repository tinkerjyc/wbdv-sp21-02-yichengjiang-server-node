const quizzes = require('./quizzes.json')
const quizzesModel = require("../models/quizzes/quizzes-model")
const quizzesDao = require('../daos/quizzes-dao')


// TODO: Node.js Assignment this week
const findAllQuizzes = () => {
    //return quizzes
    //return quizzesModel.find()
    return quizzesDao.findAllQuizzes()
}
const findQuizById = (quizId) => {
    /*return quizzes.find((quiz) => {
        return quiz._id === quizId
    })*/
    return quizzesDao.findQuizById(quizId)
}

// console.log(findAllQuizzes())
// console.log(findQuizById('123'))

// TODO: MongoDB Assignment next week
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findQuizById, findAllQuizzes,
    updateQuiz, deleteQuiz
}