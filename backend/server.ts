import express from 'express';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
dotenv.config()
import { notFound, errorHandler } from './middleware/errorMiddleware';
import connectDB from './config/db';
import cookieParser from 'cookie-parser'

const port = process.env.PORT || 5000 

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)
 
app.get('/', (req, res) => 
    res.send('Hey!!!')
)

app.listen(port, () => console.log(`Server started on port ${port} `))