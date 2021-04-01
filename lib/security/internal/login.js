import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { v4 as uuidv4 } from 'uuid'

// replace by actual te call return true on success
const validateTeToken = async (teToken) => {
    
}

const login = async (teToken, context) => {
    // console.log('teToken',teToken)
    if(!teToken || (teToken!==process.env.SIGNUP_TOKEN && !(await validateTeToken(teToken)))) {
        context.res.setHeader('Set-Cookie', cookie.serialize('auth', null, {
            maxAge: -1,
            path: '/'
        }))
        // console.log('teToken',false)
        return false
    }
    const authCookie = context.req.cookies.auth
    // console.log('authCookie',authCookie)
    if (authCookie) {
        try {
            const verified = jwt.verify(authCookie, process.env.JWT_SECRET)
            console.log('authCookie',true)
            return true
        } catch (error) {
            if (error.message !== 'jwt expired') {
                return false
            }
        }
    }
    const data = {
        id: uuidv4()
    }
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: Number(process.env.JWT_AGE) })
    if (token) {
        context.res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: Number(process.env.JWT_AGE),
            path: '/'
        }))
        return true
    }
    return false
}

export default login