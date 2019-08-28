import express from 'express'
import taskController from './taskController'

const router = express.Router()

router.post('/sorted-merge', taskController.sortedMerge)
router.post('/longest-common-sequence', taskController.longestComon)

module.exports = router
