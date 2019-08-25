import express from 'express'
import searchController from './searchController'

const router = express.Router()

router.post('/binary-search-iterative', searchController.binarySearch)
router.post('/binary-search-recursive', searchController.binarySearchR)

module.exports = router
