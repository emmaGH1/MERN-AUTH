import express from 'express';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
dotenv.config()
const port = process.env.PORT || 5000 


const app = express()

app.use('/api/users', userRoutes)

app.get('/', (req, res) => 
    res.send('Hey!!!')
)

app.listen(port, () => console.log(`Server started on port ${port} `))