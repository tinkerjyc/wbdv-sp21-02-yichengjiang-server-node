const questions = require('./questions.json');
const questionsModel = require("../models/questions/questions-model")
const questionsDao = require('../daos/questions-dao')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    //return  questions;
    return questionsDao.findAllQuestions()
}
const findQuestionsForQuiz = (qzid) => {
    /*return questions.filter((question) => {
        return question.quizId === qzid;
    })*/
    return questionsDao.findQuestionsForQuiz(quizId)
}

const findQuestionById = (quid) => {
    /*return questions.find((question) => {
        return question._id === quid;
    });*/
    return questionsDao.findQuestionById(questionId)
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, findQuestionsForQuiz,
    findAllQuestions, findQuestionById,
    updateQuestion, deleteQuestion
}