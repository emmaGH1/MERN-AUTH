import express from 'express';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import { notFound, errorHandler } from './middleware/errorMiddleware';
import connectDB from './config/db';
import cookieParser from 'cookie-parser'

dotenv.config()
const port = process.env.PORT || 5000 

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

connectDB()

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)
 
app.get('/', (req, res) => 
    res.send('Hey!!!')
)

app.listen(port, () => console.log(`Server started on port ${port} `))