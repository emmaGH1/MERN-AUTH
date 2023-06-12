import express from 'express'
const router = express.Router()
import { authUser } from '../controller/userController'

router.post('/auth', authUser)

export default router