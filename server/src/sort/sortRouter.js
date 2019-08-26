import express from 'express'
import sortController from './sortController'

const router = express.Router()

router.post('/insertion-sort', sortController.insertionSort)
router.post('/merge-sort', sortController.mergeSort)

module.exports = router
