import express from 'express'
import taskController from './taskController'

const router = express.Router()

router.post('/sorted-merge', taskController.sortedMerge)
router.post('/longest-common-sequence', taskController.longestComon)
router.post('/fibonacci-iterative', taskController.fibonacciIterative)
router.post('/fibonacci-recursive', taskController.fibonacciRecursive)

module.exports = router
