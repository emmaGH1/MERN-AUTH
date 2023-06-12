import { Request, Response } from "express"

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public

interface authUserProps {
    req: Request,
    res: Response
}

const authUser = ({req, res}: authUserProps) => {
    res.status(200).json({ message: 'Auth User' })
}

export { authUser }