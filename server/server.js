import express from 'express'
import cors from 'cors'
import itemsRouter from './routes/itemsRouter.js'

const app = express()
const PORT = process.env.PORT || 3003

app.use(cors({ credentials: true, origin: true }))

app.use('/api/items', itemsRouter)

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
