import express from 'express'
import taskController from './taskController'

const router = express.Router()

router.post('/sorted-merge', taskController.sortedMerge)

module.exports = router
