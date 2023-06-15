import jwt, { Secret} from 'jsonwebtoken'
import { Response } from 'express'

const generateToken = (res: Response, userId: string) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as Secret, {
        expiresIn: '30d'
    })

    res.cookie('jwt', token, {
       httpOnly: true,
       secure: process.env.NODE_ENV !== 'development',
       sameSite: 'strict',
       maxAge: 30 * 24 * 60 * 60 * 1000,
    })
}

export default generateToken