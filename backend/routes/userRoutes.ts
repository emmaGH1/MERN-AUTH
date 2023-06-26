import express from 'express'
const router = express.Router()
import { authUser,  registerUser, logOutUser, getUserProfile, updateUserProfile } from '../controller/userController'
import { protect } from '../middleware/authMiddleware'

router.post('/', registerUser) 
router.post('/auth', authUser)
router.post('/logout', logOutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router