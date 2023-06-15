import { Request, Response } from "express";
import asyncHandler from 'express-async-handler'
import generateToken from "../utils/generateToken";
import User from "../models/userModel";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or passsword')
    }


})

// @desc Register a new user
// route POST /api/users/
// @access Public

const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    
    const user = await User.create({
        name,
        email,
        password
    })
    
    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

// @desc Logout user
// route POST /api/users/logout
// @access Public

const logOutUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'log out user' })
})

// @desc Get user profile
// route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'User profile' })
})
 
// @desc Update user profile
// route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Update user profile' })
})

export { authUser, registerUser, logOutUser, getUserProfile, updateUserProfile } 