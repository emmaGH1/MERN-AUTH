import { Request, Response } from "express";
import asyncHandler from 'express-async-handler'
import generateToken from "../utils/generateToken";
import User, { UserDoc } from "../models/userModel";

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

interface ExtendUser extends Request {
    user?: UserDoc | null
}

const authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  });

// @desc Register a new user
// route POST /api/users/
// @access Public

const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ error: 'User already exists' });
        return;
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
        });
    } else {
        res.status(400).json({ error: 'Invalid user data' });
    }
});


// @desc Logout user
// route POST /api/users/logout
// @access Public

const logOutUser = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({ message: 'User logged out'})
})

// @desc Get user profile
// route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req: ExtendUser, res: Response) => {
    const user = {
        _id: req.user?._id,
        name: req.user?.name,
        email: req.user?.email
    }
    res.status(200).json(user)
}) 
 
// @desc Update user profile
// route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Update user profile' })
})

export { authUser, registerUser, logOutUser, getUserProfile, updateUserProfile } 