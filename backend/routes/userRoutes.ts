import express from 'express'
const router = express.Router()
import { authUser,  registerUser, logOutUser, getUserProfile, updateUserProfile } from '../controller/userController'

router.post('/auth', authUser) 
router.post('/auth', authUser)
router.post('/logout', logOutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router