import express from 'express'
import items from '../data/mockItems.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const resultItems = items.slice(startIndex, endIndex)

    const nextPage = endIndex < items.length ? page + 1 : null

    res.status(200).json(resultItems)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
